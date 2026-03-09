import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X } from 'lucide-react';



export default function CharacterCounter() {
  const [text, setText] = useState('');

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    whitespaces: text.split('').filter(c => /\s/.test(c)).length,
  };

  const keywords = [
    "character counter online", "text character counter", "letter counter", 
    "count characters online", "characters without spaces counter", "tweet character counter", 
    "sms character counter", "text length counter", "characters checker", "character calculator", 
    "count letters and spaces", "string length calculator"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Character Counter - Count Letters & Spaces"
        description="Online character counter tool. Count characters with and without spaces, check tweet length, and analyze text density. Accurate and free."
        keywords={keywords}
      />
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.characters}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Characters</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.charactersNoSpaces}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Without Spaces</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.whitespaces}</div>
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Whitespace Count</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Character Counter</h1>
          <div className="flex gap-2">
            <CopyButton text={text} />
            <button onClick={() => setText('')} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <X size={18} />
            </button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing to count characters..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base font-mono"
        />
      </div>

      <SeoContent
        title="Character Counter"
        description="A specialized tool designed to precisely count characters in your text. While similar to a word counter, this tool focuses on the exact number of keystrokes, spaces, and symbols, which is crucial for platforms with strict character limits."
        targetAudience={[
          "Twitter / X users (280 character limit)",
          "Google Ads specialists (headline and description limits)",
          "SMS marketers (160 character limit)",
          "Meta description writers for SEO"
        ]}
        howToUse={[
          "Enter your text in the box above.",
          "Watch the counters update instantly.",
          "Check 'Total Characters' for the absolute length.",
          "Check 'Without Spaces' if your platform ignores whitespace.",
          "Use the 'Whitespace Count' to see how many spaces you have."
        ]}
        benefits={[
          "Instant, lag-free counting",
          "Distinguishes between spaces and visible characters",
          "Helps avoid truncation on social media platforms",
          "Simple and focused interface"
        ]}
        faqs={[
          {
            question: "Does this count emojis?",
            answer: "Yes, emojis are counted. Note that some complex emojis may count as multiple characters depending on how the system encodes them."
          },
          {
            question: "Why is character count different from word count?",
            answer: "Word count tracks groups of letters separated by spaces. Character count tracks every single letter, number, symbol, and space individually."
          },
          {
            question: "Does it count new lines?",
            answer: "Yes, line breaks are typically counted as characters (often 1 or 2 depending on the system)."
          },
          {
            question: "Is there a limit to how much text I can check?",
            answer: "No, you can paste as much text as you like."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Does it count spaces?",
            answer: "Yes, the 'Total Characters' count includes spaces. We also provide a 'Without Spaces' count for convenience."
          },
          {
            question: "Can I use this for Twitter/X?",
            answer: "Absolutely. It's perfect for ensuring your tweets stay within the 280-character limit."
          },
          {
            question: "Is my text saved?",
            answer: "No, all processing happens in your browser and is not stored."
          },
          {
            question: "Does it work offline?",
            answer: "Yes, once the page loads, it works without an internet connection."
          },
          {
            question: "Can I clear the text easily?",
            answer: "Yes, use the 'Clear' button (X icon) to reset the tool instantly."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
