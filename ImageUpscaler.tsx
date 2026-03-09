import React, { useState, useRef, useEffect } from 'react';
import { Upload, Maximize, Download, AlertTriangle, Monitor, Smartphone, Image as ImageIcon } from 'lucide-react';

export default function ImageUpscaler() {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [upscaledImage, setUpscaledImage] = useState<string | null>(null);
  const [scaleFactor, setScaleFactor] = useState<number>(2);
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalDimensions, setOriginalDimensions] = useState<{ w: number; h: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      if (sourceImage) URL.revokeObjectURL(sourceImage);
      if (upscaledImage) URL.revokeObjectURL(upscaledImage);
    };
  }, [sourceImage, upscaledImage]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setSourceImage(objectUrl);
    setUpscaledImage(null);

    // Get dimensions
    const img = new Image();
    img.onload = () => {
      setOriginalDimensions({ w: img.width, h: img.height });
    };
    img.src = objectUrl;
  };

  const upscaleImage = () => {
    if (!sourceImage) return;
    setIsProcessing(true);

    // Small timeout to let UI update to "Processing..."
    setTimeout(() => {
      const img = new Image();
      img.onload = () => {
        const width = img.width * scaleFactor;
        const height = img.height * scaleFactor;

        // Safety check for browser canvas limits (approx 16,384px on many desktops, less on mobile)
        // We'll set a safe limit of around 8192px for mobile stability
        const MAX_DIMENSION = 8192;
        if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
          alert(`Resulting image (${width}x${height}) is too large for your browser to handle safely. Please choose a smaller scale factor.`);
          setIsProcessing(false);
          return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setIsProcessing(false);
          return;
        }

        // Use high quality smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setUpscaledImage(url);
          }
          setIsProcessing(false);
        }, 'image/png');
      };
      img.src = sourceImage;
    }, 100);
  };

  const getPredictedSize = () => {
    if (!originalDimensions) return null;
    return {
      w: originalDimensions.w * scaleFactor,
      h: originalDimensions.h * scaleFactor
    };
  };

  const predicted = getPredictedSize();
  const isRiskHigh = predicted && (predicted.w > 4096 || predicted.h > 4096);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Image Upscaler</h1>
        <p className="text-gray-600">Upscale your images by 2x, 4x, 8x, 16x, or even 32x instantly.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        {!sourceImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all"
          >
            <Upload size={48} className="text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-700">Click to upload an image</p>
            <p className="text-sm text-gray-500 mt-2">Supports JPG, PNG, WEBP</p>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="hidden" 
            />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Controls */}
              <div className="w-full md:w-1/3 space-y-6">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Select Upscale Factor</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 4, 8, 16, 32].map((factor) => (
                      <button
                        key={factor}
                        onClick={() => {
                          setScaleFactor(factor);
                          setUpscaledImage(null);
                        }}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          scaleFactor === factor
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {factor}x
                      </button>
                    ))}
                  </div>
                </div>

                {originalDimensions && (
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Original:</span>
                      <span className="font-mono">{originalDimensions.w} x {originalDimensions.h}px</span>
                    </div>
                    <div className="flex justify-between font-semibold text-indigo-600">
                      <span>Result:</span>
                      <span className="font-mono">{predicted?.w} x {predicted?.h}px</span>
                    </div>
                  </div>
                )}

                {isRiskHigh && (
                  <div className="p-3 bg-yellow-50 text-yellow-800 text-xs rounded-lg flex items-start gap-2">
                    <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                    <p>High resolution output. Processing might take a moment or fail on older devices.</p>
                  </div>
                )}

                <button
                  onClick={upscaleImage}
                  disabled={isProcessing}
                  className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-2 font-medium shadow-sm"
                >
                  {isProcessing ? <Maximize className="animate-pulse" size={20} /> : <Maximize size={20} />}
                  {isProcessing ? 'Upscaling...' : 'Upscale Image'}
                </button>

                <button
                  onClick={() => {
                    setSourceImage(null);
                    setUpscaledImage(null);
                    setOriginalDimensions(null);
                  }}
                  className="w-full py-2 text-gray-500 hover:text-gray-700 text-sm"
                >
                  Upload Different Image
                </button>
              </div>

              {/* Preview Area */}
              <div className="w-full md:w-2/3 bg-gray-100 rounded-xl border border-gray-200 flex flex-col items-center justify-center p-4 min-h-[400px]">
                {upscaledImage ? (
                  <div className="space-y-4 w-full flex flex-col items-center">
                     <div className="relative max-w-full max-h-[500px] overflow-auto border border-gray-300 shadow-sm bg-white">
                        <img src={upscaledImage} alt="Upscaled" className="max-w-none" style={{ maxHeight: '100%' }} />
                     </div>
                     <a
                      href={upscaledImage}
                      download={`upscaled-${scaleFactor}x.png`}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-sm"
                    >
                      <Download size={18} /> Download Result
                    </a>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                     <img src={sourceImage} alt="Original" className="max-h-[300px] max-w-full object-contain mx-auto shadow-sm" />
                     <p className="text-gray-500 text-sm">Original Image Preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Image Upscaler?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Image Upscaler is a powerful browser-based tool that allows you to increase the resolution of your images by up to 32 times their original size. It uses high-quality interpolation algorithms to enlarge your photos while maintaining as much smoothness as possible. It's perfect for making small images printable or suitable for high-resolution screens.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Massive Scaling: Upscale images by 2x, 4x, 8x, 16x, or even 32x.",
              "Privacy First: All processing happens on your device; no images are uploaded.",
              "Smart Safety: Prevents browser crashes by warning about excessively large outputs.",
              "Format Preservation: Outputs high-quality PNG files.",
              "Instant Preview: See the original and process the result in seconds."
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          <div className="space-y-4">
            {[
              "Upload your image by clicking the upload area.",
              "Select your desired upscale factor (e.g., 4x to make it four times bigger).",
              "Check the 'Result' dimensions to ensure it's what you need.",
              "Click 'Upscale Image' and wait for the processing to finish.",
              "Click 'Download Result' to save your new high-resolution image."
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-600 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs This Tool?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-xl">
              <Monitor className="text-blue-600 mb-2" />
              <h3 className="font-bold text-gray-900">Designers</h3>
              <p className="text-sm text-gray-600 mt-1">To upscale assets for high-DPI (Retina) displays.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <ImageIcon className="text-purple-600 mb-2" />
              <h3 className="font-bold text-gray-900">Printers</h3>
              <p className="text-sm text-gray-600 mt-1">To ensure low-res client logos don't look pixelated in print.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <Smartphone className="text-green-600 mb-2" />
              <h3 className="font-bold text-gray-900">Casual Users</h3>
              <p className="text-sm text-gray-600 mt-1">To enlarge old photos or memes for sharing.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
