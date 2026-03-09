import React, { useState, useRef } from 'react';
import { Upload, Download, Image as ImageIcon, Layers, Monitor } from 'lucide-react';

export default function FaviconGenerator() {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [generatedIcons, setGeneratedIcons] = useState<{ size: number; url: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizes = [16, 32, 48, 180];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setSourceImage(event.target?.result as string);
        generateFavicons(img);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const generateFavicons = (img: HTMLImageElement) => {
    const newIcons = sizes.map((size) => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Use high quality scaling
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, size, size);
        return { size, url: canvas.toDataURL('image/png') };
      }
      return { size, url: '' };
    });
    setGeneratedIcons(newIcons);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Favicon Generator</h1>
        <p className="text-gray-600">Generate perfect favicons for your website instantly.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        {!sourceImage ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all"
          >
            <Upload size={48} className="text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-700">Click to upload your logo</p>
            <p className="text-sm text-gray-500 mt-2">Recommended: 512x512px PNG or JPG</p>
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
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl">
              <img src={sourceImage} alt="Source" className="h-32 object-contain" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {generatedIcons.map((icon) => (
                <div key={icon.size} className="flex flex-col items-center space-y-3 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg">
                    <img src={icon.url} alt={`${icon.size}x${icon.size}`} style={{ width: icon.size > 48 ? 48 : icon.size }} />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{icon.size}x{icon.size}</div>
                    <div className="text-xs text-gray-500">PNG</div>
                  </div>
                  <a
                    href={icon.url}
                    download={`favicon-${icon.size}x${icon.size}.png`}
                    className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  setSourceImage(null);
                  setGeneratedIcons([]);
                }}
                className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Upload New Image
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Favicon Generator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Favicon Generator is a specialized tool that converts any image (like your logo) into the standard icon sizes required for websites. A favicon is the small icon you see in browser tabs, bookmarks, and mobile home screens. This tool automatically creates the most common sizes (16x16, 32x32, 48x48, and 180x180) from a single upload.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Multi-Size Generation: Creates 16px, 32px, 48px, and 180px icons simultaneously.",
              "High-Quality Resizing: Uses advanced algorithms to keep your icons crisp.",
              "Instant Preview: See exactly how your favicons will look before downloading.",
              "PNG Output: Generates transparent PNG files, the modern standard for favicons.",
              "Privacy First: All processing happens in your browser; no images are uploaded to a server."
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
              "Click the upload box to select your logo or image (square images work best).",
              "The tool will instantly generate favicons in four standard sizes.",
              "Preview the icons in the grid to ensure they look correct.",
              "Click the 'Download' button below each icon to save them to your computer.",
              "Upload these files to your website's root directory or assets folder."
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg h-fit text-indigo-600">
                <Monitor size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Web Developers</h3>
                <p className="text-sm text-gray-600 mt-1">To quickly generate all required icon assets for a new project.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-pink-50 rounded-lg h-fit text-pink-600">
                <Layers size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Brand Managers</h3>
                <p className="text-sm text-gray-600 mt-1">To ensure brand consistency across browser tabs and mobile shortcuts.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
