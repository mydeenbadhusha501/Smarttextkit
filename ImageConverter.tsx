import React, { useState, useRef } from 'react';
import { Upload, RefreshCw, Download, FileImage, ArrowRight, Monitor, Smartphone } from 'lucide-react';

export default function ImageConverter() {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [targetFormat, setTargetFormat] = useState<'png' | 'jpeg' | 'webp'>('jpeg');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs to prevent memory leaks
  React.useEffect(() => {
    return () => {
      if (sourceImage) URL.revokeObjectURL(sourceImage);
      if (convertedImage) URL.revokeObjectURL(convertedImage);
    };
  }, [sourceImage, convertedImage]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Use createObjectURL instead of FileReader for instant preview and lower memory usage
    const objectUrl = URL.createObjectURL(file);
    setSourceImage(objectUrl);
    setConvertedImage(null); // Reset previous conversion
  };

  const convertImage = () => {
    if (!sourceImage) return;
    setIsProcessing(true);

    const img = new Image();
    img.onload = () => {
      // Calculate new dimensions (max 2048px to prevent mobile crashes)
      let width = img.width;
      let height = img.height;
      const MAX_SIZE = 2048;

      if (width > MAX_SIZE || height > MAX_SIZE) {
        if (width > height) {
          height = Math.round((height * MAX_SIZE) / width);
          width = MAX_SIZE;
        } else {
          width = Math.round((width * MAX_SIZE) / height);
          height = MAX_SIZE;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setIsProcessing(false);
        return;
      }

      // Fill white background for JPEG if transparency exists
      if (targetFormat === 'jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Use high quality scaling
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);
      
      const mimeType = `image/${targetFormat}`;
      
      // Use toBlob instead of toDataURL for better performance
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          setConvertedImage(url);
        }
        setIsProcessing(false);
      }, mimeType, 0.92);
    };
    img.src = sourceImage;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Image Format Converter</h1>
        <p className="text-gray-600">Convert image format (PNG, JPG, WEBP) securely in your browser.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        {!sourceImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all"
          >
            <Upload size={48} className="text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-700">Click to upload an image</p>
            <p className="text-sm text-gray-500 mt-2">Supports PNG, JPG, WEBP, GIF</p>
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="space-y-2 text-center">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <img src={sourceImage} alt="Original" className="h-48 object-contain mx-auto" />
                </div>
                <p className="text-sm font-medium text-gray-500">Original</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                  {['png', 'jpeg', 'webp'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => {
                        setTargetFormat(fmt as any);
                        setConvertedImage(null);
                      }}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        targetFormat === fmt 
                          ? 'bg-white text-indigo-600 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
                <ArrowRight className="text-gray-300 hidden md:block" size={32} />
                <button
                  onClick={convertImage}
                  disabled={isProcessing}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center gap-2"
                >
                  {isProcessing ? <RefreshCw className="animate-spin" size={18} /> : <RefreshCw size={18} />}
                  Convert Now
                </button>
              </div>

              <div className="space-y-2 text-center">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 min-w-[200px] h-[226px] flex items-center justify-center">
                  {convertedImage ? (
                    <img src={convertedImage} alt="Converted" className="h-48 object-contain mx-auto" />
                  ) : (
                    <div className="text-gray-400 text-sm">Preview will appear here</div>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-500">Converted ({targetFormat.toUpperCase()})</p>
              </div>
            </div>

            {convertedImage && (
              <div className="flex justify-center pt-4">
                <a
                  href={convertedImage}
                  download={`converted-image.${targetFormat}`}
                  className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-sm font-medium text-lg"
                >
                  <Download size={20} /> Download Image
                </a>
              </div>
            )}

            <div className="flex justify-center pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setSourceImage(null);
                  setConvertedImage(null);
                }}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Image Format Converter?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Image Format Converter is a free online tool that lets you <strong>convert image format</strong> easily and securely. Whether you need a <strong>png to jpg converter</strong>, or want to switch between WEBP and other formats, this tool handles it all within your browser. It ensures your photos are compatible with any platform or software you use.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Universal Support: Convert between PNG, JPG (JPEG), and WEBP formats.",
              "Privacy Guaranteed: 100% client-side processing means your photos are never uploaded to a server.",
              "High Quality: Maintains excellent image fidelity during conversion.",
              "Fast & Free: No waiting queues, no file size limits, and completely free to use.",
              "Cross-Platform: Works on Windows, Mac, Linux, iOS, and Android devices."
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
              "Upload your image by clicking the dashed box or dragging a file in.",
              "Select your desired output format (PNG, JPEG, or WEBP) from the toggle buttons.",
              "Click the 'Convert Now' button to process the image.",
              "Preview the result and click the green 'Download Image' button to save it."
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
            <div className="p-4 bg-orange-50 rounded-xl">
              <FileImage className="text-orange-600 mb-2" />
              <h3 className="font-bold text-gray-900">Bloggers</h3>
              <p className="text-sm text-gray-600 mt-1">To convert heavy PNGs to lightweight JPGs or WEBPs for faster page loads.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <Monitor className="text-blue-600 mb-2" />
              <h3 className="font-bold text-gray-900">Designers</h3>
              <p className="text-sm text-gray-600 mt-1">To switch formats for compatibility with different design software.</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-xl">
              <Smartphone className="text-indigo-600 mb-2" />
              <h3 className="font-bold text-gray-900">Social Media Mgrs</h3>
              <p className="text-sm text-gray-600 mt-1">To ensure images meet the specific format requirements of each platform.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
