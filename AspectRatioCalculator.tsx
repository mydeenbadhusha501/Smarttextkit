import React, { useState, useEffect } from 'react';
import { Calculator, Monitor, Smartphone, Tablet } from 'lucide-react';

export default function AspectRatioCalculator() {
  const [width, setWidth] = useState<number | ''>(1920);
  const [height, setHeight] = useState<number | ''>(1080);
  const [ratio, setRatio] = useState<string>('16:9');

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  useEffect(() => {
    if (!width || !height) {
      setRatio('');
      return;
    }
    const w = Number(width);
    const h = Number(height);
    const divisor = gcd(w, h);
    setRatio(`${w / divisor}:${h / divisor}`);
  }, [width, height]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Image Aspect Ratio Calculator</h1>
        <p className="text-gray-600">Calculate the aspect ratio of any image dimensions instantly.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 1920"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 1080"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl border border-gray-100 h-full">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Aspect Ratio</div>
            <div className="text-5xl font-bold text-indigo-600">{ratio || '-:-'}</div>
            
            {/* Visual Representation */}
            {width && height && (
              <div className="mt-6 relative w-32 bg-gray-200 rounded border-2 border-gray-400 flex items-center justify-center" 
                   style={{ aspectRatio: `${width}/${height}` }}>
                <span className="text-xs text-gray-500 font-mono">{ratio}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Image Aspect Ratio Calculator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Image Aspect Ratio Calculator is a tool designed to help you determine the proportional relationship between the width and height of an image or screen. It takes your pixel dimensions and simplifies them into the smallest whole number ratio (like 16:9 or 4:3), which is essential for responsive design, video production, and photography.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Instant Calculation: Updates the ratio immediately as you type dimensions.",
              "Visual Preview: Shows a box representing the calculated shape.",
              "Precise Math: Uses the Greatest Common Divisor (GCD) to find the simplest ratio.",
              "Universal Use: Works for any resolution, from tiny icons to 8K screens.",
              "Clean Interface: Simple inputs with a clear, large result display."
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
              "Enter the width of your image or screen in pixels.",
              "Enter the height of your image or screen in pixels.",
              "The tool will automatically calculate and display the aspect ratio (e.g., 16:9).",
              "Use the result to ensure your content fits perfectly on different screens or platforms."
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
              <h3 className="font-bold text-gray-900">Web Designers</h3>
              <p className="text-sm text-gray-600 mt-1">To ensure images and containers scale correctly across devices.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <Smartphone className="text-purple-600 mb-2" />
              <h3 className="font-bold text-gray-900">Photographers</h3>
              <p className="text-sm text-gray-600 mt-1">To crop photos to standard print or social media sizes.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <Tablet className="text-green-600 mb-2" />
              <h3 className="font-bold text-gray-900">Video Editors</h3>
              <p className="text-sm text-gray-600 mt-1">To verify video project settings (16:9, 9:16, 21:9).</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
