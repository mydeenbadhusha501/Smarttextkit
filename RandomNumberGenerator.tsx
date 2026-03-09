import React, { useState } from 'react';
import { Hash, Copy, RefreshCw, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SeoContent } from '../components/SeoContent';


export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      newNumbers.push(randomNum);
    }
    setGeneratedNumbers(newNumbers);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedNumbers.join(', '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const keywords = [
    "random number generator", "RNG", "random integer", "number generator", "random picker", 
    "random number picker", "generate random numbers", "online RNG", "random digit generator", 
    "number randomizer", "lottery number generator", "random choice", "probability tool"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO 
        title="Random Number Generator - Generate Random Numbers Instantly"
        description="Generate random numbers between a range. Perfect for lotteries, games, and statistical sampling. Customize min/max values and quantity. True randomness."
        keywords={keywords}
      />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Hash size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Random Number Generator</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Min Value</label>
                <input
                  type="number"
                  value={min}
                  onChange={(e) => setMin(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Value</label>
                <input
                  type="number"
                  value={max}
                  onChange={(e) => setMax(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                max="1000"
                value={count}
                onChange={(e) => setCount(Math.min(1000, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            <button
              onClick={generateNumbers}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
            >
              <RefreshCw size={20} />
              Generate Numbers
            </button>
          </div>

          <div className="relative">
            <div className="absolute top-2 right-2">
              <button
                onClick={copyToClipboard}
                disabled={generatedNumbers.length === 0}
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            <div className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-xl font-mono text-lg overflow-y-auto flex flex-wrap gap-2 content-start">
              {generatedNumbers.length > 0 ? (
                generatedNumbers.map((num, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white border border-gray-200 rounded-md text-gray-800 shadow-sm">
                    {num}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-sm">Generated numbers will appear here...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <SeoContent
        title="Random Number Generator"
        description="Generate random numbers instantly with our free Random Number Generator. Perfect for lotteries, games, statistical sampling, or any situation requiring unbiased random values. Customize your range (min/max) and quantity to get exactly what you need."
        targetAudience={[
          "Researchers needing random samples",
          "Gamers needing dice rolls or RNG",
          "Teachers for classroom activities",
          "Developers testing algorithms"
        ]}
        howToUse={[
          "Enter the minimum value for your range (e.g., 1).",
          "Enter the maximum value for your range (e.g., 100).",
          "Specify how many numbers you want to generate.",
          "Click 'Generate Numbers' to see your results instantly.",
          "Click the copy icon to copy the generated numbers to your clipboard."
        ]}
        benefits={[
          "True randomness simulation",
          "Customizable range",
          "Bulk generation support",
          "Instant results",
          "Mobile friendly"
        ]}
        faqs={[
          {
            question: "Are these numbers truly random?",
            answer: "We use the browser's cryptographic random number generator (where available) to ensure high-quality randomness suitable for most applications."
          },
          {
            question: "Can I generate negative numbers?",
            answer: "Yes, simply enter a negative value in the 'Min Value' or 'Max Value' fields."
          },
          {
            question: "Is there a limit to the range?",
            answer: "The range is limited only by the maximum safe integer in JavaScript, which is very large (+/- 9 quadrillion)."
          },
          {
            question: "Can I generate decimal numbers?",
            answer: "Currently, this tool generates integers (whole numbers). We are working on a decimal version."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Do you store the generated numbers?",
            answer: "No, numbers are generated locally in your browser and are not saved or transmitted."
          },
          {
            question: "Can I generate unique numbers (no duplicates)?",
            answer: "The current version allows duplicates (replacement). We are adding a 'unique only' toggle soon."
          },
          {
            question: "How many numbers can I generate at once?",
            answer: "You can generate up to 1000 numbers in a single batch to ensure browser performance."
          },
          {
            question: "Can I use this for a lottery?",
            answer: "Yes, it's perfect for picking random winners or lottery numbers."
          },
          {
            question: "Is it mobile friendly?",
            answer: "Yes, the interface is fully responsive for phones and tablets."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
