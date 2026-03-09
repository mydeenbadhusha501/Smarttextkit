import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X, ArrowLeftRight, RefreshCw } from 'lucide-react';



export default function TextReverser() {
  const [text, setText] = useState('');

  const reverseText = () => setText(text.split('').reverse().join(''));
  const reverseWords = () => setText(text.split(/(\s+)/).reverse().join(''));
  const reverseEachWord = () => setText(text.split(/(\s+)/).map(w => w.split('').reverse().join('')).join(''));

  const keywords = [
    "text reverser", "reverse text online", "backwards text generator", "mirror text", 
    "flip text", "reverse string", "reverse words", "reverse text generator", 
    "backwards text converter"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Text Reverser - Reverse Text Online"
        description="Free online text reverser. Flip text backwards, reverse word order, or reverse letters within words instantly."
        keywords={keywords}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Text Reverser</h1>
          <div className="flex gap-2">
            <CopyButton text={text} />
            <button onClick={() => setText('')} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-2">
          <button onClick={reverseText} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <ArrowLeftRight size={16} /> Reverse Entire Text
          </button>
          <button onClick={reverseWords} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <RefreshCw size={16} /> Reverse Word Order
          </button>
          <button onClick={reverseEachWord} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <RefreshCw size={16} /> Reverse Each Word
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here to reverse..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Text Reverser"
        description="A fun and versatile tool to reverse text in multiple ways. Whether you want to flip an entire sentence backwards, reverse the order of words, or just reverse the letters within each word, this tool does it instantly. Perfect for social media, puzzles, or simple encryption."
        targetAudience={[
          "Social media users creating unique, eye-catching posts",
          "Developers testing palindrome algorithms",
          "Puzzle creators and solving enthusiasts",
          "Graphic designers looking for unique text effects",
          "Anyone wanting to send secret messages"
        ]}
        howToUse={[
          "Type or paste your text into the input box.",
          "Click 'Reverse Entire Text' to flip the whole string (e.g., 'Hello' -> 'olleH').",
          "Click 'Reverse Word Order' to swap the position of words (e.g., 'Hello World' -> 'World Hello').",
          "Click 'Reverse Each Word' to flip letters inside words but keep the sentence order (e.g., 'Hello World' -> 'olleH dlroW').",
          "Copy the result to use anywhere."
        ]}
        benefits={[
          "Instant text transformation",
          "Three different reversal modes",
          "Fun for social media and messaging",
          "Simple, clean, and free to use",
          "Works offline in your browser"
        ]}
        faqs={[
          {
            question: "Does this work with emojis?",
            answer: "Yes, it generally works with standard emojis. However, some complex emoji combinations (like skin tone modifiers) might be split into their components."
          },
          {
            question: "Can I reverse numbers?",
            answer: "Yes, numbers are treated just like any other character and will be reversed."
          },
          {
            question: "Is this useful for coding?",
            answer: "Yes, developers often use it to quickly test string reversal logic or check for palindromes."
          },
          {
            question: "Is my text saved?",
            answer: "No, all processing happens locally on your device. We do not store your text."
          },
          {
            question: "Can I reverse multiple lines?",
            answer: "Yes, the tool handles multi-line text and preserves the line breaks in the reversed output."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
