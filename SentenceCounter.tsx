import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X } from 'lucide-react';



export default function SentenceCounter() {
  const [text, setText] = useState('');

  const countSentences = (t: string) => {
    if (!t.trim()) return 0;
    // Match sentence endings (. ! ?) followed by space or end of string
    // This is a basic approximation
    return t.split(/[.!?]+(?=\s|$)/).filter(s => s.trim().length > 0).length;
  };

  const count = countSentences(text);

  const keywords = [
    "sentence counter", "count sentences", "sentence checker", "text analysis", 
    "sentence length checker", "online sentence counter", "free sentence counter", 
    "essay sentence counter"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Sentence Counter - Count Sentences Online"
        description="Free online sentence counter. Instantly count the number of sentences in your text to improve readability and meet writing requirements."
        keywords={keywords}
      />
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center">
        <div className="text-6xl font-bold text-indigo-600 mb-2">{count}</div>
        <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sentences</div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Sentence Counter</h1>
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
          placeholder="Start typing to count sentences..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Sentence Counter"
        description="Count the number of sentences in your text instantly with our free Sentence Counter. Whether you are analyzing readability, checking essay structure, or meeting specific writing requirements, this tool provides an accurate count based on standard punctuation rules."
        targetAudience={[
          "Students ensuring their essays meet sentence requirements",
          "Writers analyzing paragraph length and flow",
          "SEO specialists optimizing content readability",
          "Linguists studying text complexity",
          "Editors checking for run-on sentences"
        ]}
        howToUse={[
          "Type or paste your text into the input box.",
          "The sentence count updates automatically in real-time.",
          "Use the 'Clear' button to reset the counter for a new text."
        ]}
        benefits={[
          "Instant, real-time counting",
          "Simple and distraction-free interface",
          "Helps improve writing flow and readability",
          "Works offline in your browser",
          "No text storage for complete privacy"
        ]}
        faqs={[
          {
            question: "How does the sentence counter work?",
            answer: "Our tool detects sentences by identifying standard punctuation marks (. ! ?) that are followed by a space or the end of a line. This ensures accurate counting for most English texts."
          },
          {
            question: "Does it count abbreviations like 'Mr.' or 'Dr.' as sentences?",
            answer: "Our basic algorithm looks for periods, so abbreviations might sometimes be counted as sentence endings. We recommend checking your text for these cases if precision is critical."
          },
          {
            question: "Is there a limit to the text length?",
            answer: "No, you can paste as much text as you like. The tool handles large documents instantly."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is 100% free to use."
          },
          {
            question: "Why is sentence count important?",
            answer: "Sentence count helps determine the readability of your text. Too many long sentences can make writing hard to follow, while too many short ones can make it choppy. Balancing sentence length is key to good writing."
          },
          {
            question: "Can I use this for other languages?",
            answer: "It works best for languages that use standard punctuation marks (. ! ?) to end sentences."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
