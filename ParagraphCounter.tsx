import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X } from 'lucide-react';



export default function ParagraphCounter() {
  const [text, setText] = useState('');

  const countParagraphs = (t: string) => {
    if (!t.trim()) return 0;
    return t.split(/\n+/).filter(p => p.trim().length > 0).length;
  };

  const count = countParagraphs(text);

  const keywords = [
    "paragraph counter", "count paragraphs", "paragraph checker", "text structure analysis", 
    "online paragraph counter", "paragraph word counter", "count paragraphs online", 
    "text analyzer", "essay structure checker", "writing tool"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Paragraph Counter - Count Paragraphs Online"
        description="Free online paragraph counter. Instantly count the number of paragraphs in your text to check document structure and meet assignment requirements. Accurate and fast."
        keywords={keywords}
      />
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
        <div className="text-6xl font-bold text-indigo-600 mb-2">{count}</div>
        <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Paragraphs</div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Paragraph Counter</h1>
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
          placeholder="Start typing to count paragraphs..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Paragraph Counter"
        description="Count the number of paragraphs in your document instantly. Essential for checking document structure, readability, and meeting assignment requirements. This tool accurately detects paragraphs based on line breaks."
        targetAudience={[
          "Writers structuring articles",
          "Students meeting assignment criteria",
          "Editors checking content flow",
          "SEO specialists analyzing content structure"
        ]}
        howToUse={[
          "Type or paste your text into the input box.",
          "The counter updates instantly to show the total number of paragraphs.",
          "Use the 'Clear' button to start over."
        ]}
        benefits={[
          "Instant count",
          "Simple interface",
          "Accurate detection of non-empty lines",
          "Helps improve text readability"
        ]}
        faqs={[
          {
            question: "What counts as a paragraph?",
            answer: "Any block of text separated by a line break (Enter key) is counted as a paragraph. Empty lines are ignored."
          },
          {
            question: "Does it count empty lines?",
            answer: "No, empty lines or lines with only spaces are not counted as paragraphs."
          },
          {
            question: "Is there a limit to the text length?",
            answer: "No, you can paste entire essays or chapters."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Does it count headings?",
            answer: "Yes, if a heading is on its own line, it is counted as a paragraph."
          },
          {
            question: "Can I use this for coding?",
            answer: "Yes, it can count blocks of code separated by empty lines."
          },
          {
            question: "Is my text saved?",
            answer: "No, all processing happens in your browser and is not stored."
          },
          {
            question: "Does it work offline?",
            answer: "Yes, once loaded, it works without an internet connection."
          },
          {
            question: "Why is paragraph count important?",
            answer: "Breaking text into paragraphs improves readability and user engagement."
          },
          {
            question: "Can I copy the text back?",
            answer: "Yes, use the copy button to retrieve your text."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
