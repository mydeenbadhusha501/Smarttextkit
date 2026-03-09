import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Download, RefreshCw } from 'lucide-react';

export default function ImageCompressor() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.8);
  const [width, setWidth] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setOriginalSize(file.size);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setOriginalImage(event.target?.result as string);
        setWidth(img.width);
        setHeight(img.height);
        compressImage(img, img.width, img.height, quality);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const compressImage = (img: HTMLImageElement, w: number, h: number, q: number) => {
    setIsProcessing(true);
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0, w, h);
    
    canvas.toBlob((blob) => {
      if (!blob) return;
      setCompressedSize(blob.size);
      const url = URL.createObjectURL(blob);
      setCompressedImage(url);
      setIsProcessing(false);
    }, 'image/jpeg', q);
  };

  const handleUpdate = () => {
    if (!originalImage) return;
    const img = new Image();
    img.onload = () => {
      compressImage(img, Number(width) || img.width, Number(height) || img.height, quality);
    };
    img.src = originalImage;
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Image Compressor & Resizer</h1>
        <p className="text-gray-600">Optimize your images for the web.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        {!originalImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all"
          >
            <Upload size={48} className="text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-700">Click to upload an image</p>
            <p className="text-sm text-gray-500 mt-2">JPG, PNG, WebP supported</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 flex items-center gap-2">
                  <ImageIcon size={18} /> Original
                </h3>
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={originalImage} alt="Original" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-sm text-gray-500 text-center">{formatSize(originalSize)}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 flex items-center gap-2">
                  <RefreshCw size={18} /> Compressed
                </h3>
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  {isProcessing ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                  ) : compressedImage ? (
                    <img src={compressedImage} alt="Compressed" className="max-w-full max-h-full object-contain" />
                  ) : null}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{formatSize(compressedSize)}</span>
                  {originalSize > 0 && (
                    <span className="text-green-600 font-medium">
                      -{Math.round(((originalSize - compressedSize) / originalSize) * 100)}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quality: {Math.round(quality * 100)}%</label>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={quality}
                    onChange={(e) => {
                      setQuality(parseFloat(e.target.value));
                      setTimeout(handleUpdate, 100);
                    }}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Width (px)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => {
                      setWidth(Number(e.target.value));
                      // Maintain aspect ratio logic could go here
                    }}
                    onBlur={handleUpdate}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Height (px)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => {
                      setHeight(Number(e.target.value));
                    }}
                    onBlur={handleUpdate}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    setOriginalImage(null);
                    setCompressedImage(null);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                >
                  Reset
                </button>
                {compressedImage && (
                  <a
                    href={compressedImage}
                    download="compressed-image.jpg"
                    className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Download size={18} /> Download
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Image Compressor & Resizer?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Image Compressor & Resizer is a versatile online tool that allows you to reduce the file size of your images and change their dimensions directly in your browser. Unlike other tools that upload your images to a server, this tool processes everything locally on your device, ensuring maximum privacy and speed. It's perfect for optimizing images for websites, emails, or social media.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "100% Client-Side: Your images never leave your device, ensuring complete privacy.",
              "Adjustable Quality: Fine-tune the compression level to balance file size and image quality.",
              "Resize Capability: Easily change the width and height of your images.",
              "Format Support: Works with common image formats like JPG, PNG, and WebP.",
              "Live Preview: See the compressed image and file size savings in real-time."
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
              "Click the upload area to select an image from your device.",
              "Once uploaded, you will see the original image alongside the compressed preview.",
              "Use the 'Quality' slider to adjust the compression level. Lower values result in smaller file sizes.",
              "Optionally, enter new values for 'Width' and 'Height' to resize the image.",
              "Check the file size reduction percentage to see how much space you've saved.",
              "Click the 'Download' button to save your optimized image."
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
      </div>
    </div>
  );
}
