import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X } from 'lucide-react';



export default function CaseConverter() {
  const [text, setText] = useState('');

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  const toTitleCase = () => {
    setText(
      text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    );
  };
  const toSentenceCase = () => {
    setText(
      text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())
    );
  };
  const toAlternatingCase = () => {
    setText(
      text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('')
    );
  };

  const keywords = [
    "text case converter", "uppercase converter", "lowercase converter", "sentence case converter", 
    "title case converter", "change text case online", "convert text to uppercase", 
    "convert text to lowercase", "case changer tool", "capitalization tool", 
    "convert text case online free", "alternating case converter", "inverse case", 
    "caps lock fixer"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Text Case Converter - Uppercase, Lowercase & Title Case"
        description="Convert text case online instantly. Switch between uppercase, lowercase, sentence case, title case, and more."
        keywords={keywords}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Text Case Converter</h1>
          <div className="flex gap-2">
            <CopyButton text={text} />
            <button onClick={() => setText('')} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-2">
          <button onClick={toUpperCase} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">UPPER CASE</button>
          <button onClick={toLowerCase} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">lower case</button>
          <button onClick={toTitleCase} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">Title Case</button>
          <button onClick={toSentenceCase} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">Sentence case</button>
          <button onClick={toAlternatingCase} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">aLtErNaTiNg cAsE</button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here to convert..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Text Case Converter"
        description="Easily convert text between different letter cases: upper case, lower case, title case, sentence case, and more. This tool saves you from manually retyping text when you've accidentally left Caps Lock on or need to format headlines."
        targetAudience={[
          "Editors fixing formatting issues",
          "Students formatting essay titles",
          "Programmers converting variable names",
          "Anyone who accidentally typed a paragraph with Caps Lock on"
        ]}
        howToUse={[
          "Paste your text into the input box.",
          "Click 'UPPER CASE' to convert all letters to capitals.",
          "Click 'lower case' to convert all letters to small letters.",
          "Click 'Title Case' to capitalize the first letter of every word.",
          "Click 'Sentence case' to capitalize only the start of sentences.",
          "Click 'aLtErNaTiNg cAsE' for a fun, randomized style."
        ]}
        benefits={[
          "Supports multiple case formats",
          "Instant conversion",
          "Preserves special characters and punctuation",
          "Simple, one-click operation"
        ]}
        faqs={[
          {
            question: "What is Title Case?",
            answer: "Title Case capitalizes the first letter of every word. It is commonly used for headlines and book titles."
          },
          {
            question: "What is Sentence Case?",
            answer: "Sentence Case capitalizes only the first letter of the first word in a sentence (and proper nouns). It is the standard format for normal prose."
          },
          {
            question: "Does it work with other languages?",
            answer: "Yes, it supports standard capitalization rules for most languages using the Latin alphabet."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, our Text Case Converter is completely free to use."
          },
          {
            question: "Does it fix accidental Caps Lock?",
            answer: "Yes, simply select 'Sentence case' or 'lower case' to fix text typed with Caps Lock on."
          },
          {
            question: "Can I convert large texts?",
            answer: "Yes, you can paste and convert large blocks of text instantly."
          },
          {
            question: "Is my text stored?",
            answer: "No, all conversion happens in your browser and is not saved."
          },
          {
            question: "What is Alternating Case?",
            answer: "Alternating Case switches between uppercase and lowercase letters (e.g., 'LiKe ThIs'), often used for memes or stylistic effect."
          },
          {
            question: "Does it affect numbers?",
            answer: "No, numbers and special symbols remain unchanged."
          },
          {
            question: "Can I copy the result easily?",
            answer: "Yes, use the copy button to grab your converted text instantly."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
