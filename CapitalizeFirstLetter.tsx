import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X, Type } from 'lucide-react';



export default function CapitalizeFirstLetter() {
  const [text, setText] = useState('');

  const capitalizeSentences = () => {
    setText(
      text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())
    );
  };

  const capitalizeLines = () => {
    setText(
      text.split('\n').map(line => {
        const trimmed = line.trimStart();
        if (!trimmed) return line;
        const index = line.indexOf(trimmed);
        return line.slice(0, index) + trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }).join('\n')
    );
  };

  const capitalizeWords = () => {
    setText(
      text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    );
  };

  const keywords = [
    "capitalize first letter", "capitalize text", "sentence case", "title case", 
    "text capitalization tool", "capitalize words", "capitalize lines", 
    "auto capitalize tool", "fix capitalization", "convert case online", 
    "first letter capitalizer", "title capitalization"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Capitalize First Letter - Text Capitalization Tool"
        description="Free online capitalization tool. Automatically capitalize the first letter of sentences, lines, or every word instantly. Perfect for titles, lists, and fixing text."
        keywords={keywords}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Capitalize First Letter Tool</h1>
          <div className="flex gap-2">
            <CopyButton text={text} />
            <button onClick={() => setText('')} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-2">
          <button onClick={capitalizeSentences} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm">
            <Type size={16} /> Capitalize Sentences
          </button>
          <button onClick={capitalizeLines} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <Type size={16} /> Capitalize Every Line
          </button>
          <button onClick={capitalizeWords} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <Type size={16} /> Capitalize Every Word
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Capitalize First Letter Tool"
        description="A specialized tool to automatically capitalize the first letter of sentences, lines, or every word (Title Case). Whether you need to fix uncapitalized text, format a list, or create a title, this tool handles it instantly."
        targetAudience={[
          "Writers fixing drafts",
          "Students correcting essays",
          "Programmers formatting data",
          "Social media managers"
        ]}
        howToUse={[
          "Paste your text into the input box.",
          "Click 'Capitalize Sentences' to fix sentence case (first letter after punctuation).",
          "Click 'Capitalize Every Line' to capitalize the start of each new line (great for lists).",
          "Click 'Capitalize Every Word' to convert to Title Case.",
          "Copy the formatted text to your clipboard."
        ]}
        benefits={[
          "Fixes lazy typing instantly",
          "Standardizes formatting",
          "Multiple modes for different needs",
          "Saves manual editing time"
        ]}
        faqs={[
          {
            question: "Does 'Capitalize Sentences' lowercase the rest of the text?",
            answer: "Yes, it converts the text to lowercase first to ensure proper sentence case, then capitalizes the first letter after punctuation."
          },
          {
            question: "What is the difference between Title Case and Sentence Case?",
            answer: "Title Case capitalizes the first letter of every word, while Sentence Case only capitalizes the first letter of the first word in a sentence."
          },
          {
            question: "Does it handle special characters?",
            answer: "Yes, it respects punctuation and special characters when determining where to capitalize."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Can I use this for coding?",
            answer: "Yes, it's useful for formatting comments, data lists, or converting variable names."
          },
          {
            question: "Does it work with multiple paragraphs?",
            answer: "Yes, it processes multi-paragraph text correctly."
          },
          {
            question: "Is my text saved?",
            answer: "No, all processing happens in your browser and is not stored."
          },
          {
            question: "Can I undo changes?",
            answer: "There is no undo button, but you can paste your original text again if needed."
          },
          {
            question: "Does it work on mobile?",
            answer: "Yes, the tool is mobile-responsive."
          },
          {
            question: "What if my text is already capitalized?",
            answer: "The tool will re-process it according to the selected mode, often converting other letters to lowercase first to ensure consistency."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
