import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X, ArrowDownAZ, ArrowUpAZ, Shuffle } from 'lucide-react';



export default function AlphabeticalSorter() {
  const [text, setText] = useState('');

  const sortAZ = () => {
    const lines = text.split('\n');
    setText(lines.sort((a, b) => a.localeCompare(b)).join('\n'));
  };

  const sortZA = () => {
    const lines = text.split('\n');
    setText(lines.sort((a, b) => b.localeCompare(a)).join('\n'));
  };

  const sortNumeric = () => {
    const lines = text.split('\n');
    setText(lines.sort((a, b) => {
      const numA = parseFloat(a.match(/-?\d+(\.\d+)?/)?.[0] || '0');
      const numB = parseFloat(b.match(/-?\d+(\.\d+)?/)?.[0] || '0');
      return numA - numB;
    }).join('\n'));
  };

  const sortRandom = () => {
    const lines = text.split('\n');
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    setText(lines.join('\n'));
  };

  const keywords = [
    "alphabetical sorter", "sort list alphabetically", "abc sorter", "list organizer", 
    "text sorter", "sort words", "alphabetize list", "online list sorter", 
    "sort z to a", "sort a to z", "list formatting tool", "order list alphabetically"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Alphabetical Sorter - Sort Lists A-Z Online"
        description="Free online alphabetical sorter. Sort lists A-Z, Z-A, numerically, or randomize order instantly. Perfect for organizing names, bibliographies, and data sets."
        keywords={keywords}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Alphabetical Text Sorter</h1>
          <div className="flex gap-2">
            <CopyButton text={text} />
            <button onClick={() => setText('')} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-2">
          <button onClick={sortAZ} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <ArrowDownAZ size={16} /> Sort A-Z
          </button>
          <button onClick={sortZA} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <ArrowUpAZ size={16} /> Sort Z-A
          </button>
          <button onClick={sortNumeric} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <ArrowDownAZ size={16} /> Sort Numeric
          </button>
          <button onClick={sortRandom} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <Shuffle size={16} /> Randomize
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your list here..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base font-mono"
        />
      </div>

      <SeoContent
        title="Alphabetical Text Sorter"
        description="Organize your lists instantly with our Alphabetical Sorter. This free online tool allows you to sort text, names, or items in alphabetical (A-Z) or reverse alphabetical (Z-A) order. Perfect for students, teachers, and professionals who need to organize bibliographies, guest lists, or data sets. Simply paste your list and let our tool handle the sorting for you."
        targetAudience={[
          "Students organizing bibliographies",
          "Developers sorting CSS properties or imports",
          "Event planners organizing guest lists",
          "Anyone managing data lists"
        ]}
        howToUse={[
          "Paste your unsorted list into the text area.",
          "Choose your sorting order: 'A-Z' for ascending or 'Z-A' for descending.",
          "Click 'Sort Numeric' if your list contains numbers that need numerical ordering.",
          "Use 'Randomize' to shuffle the list order completely.",
          "Click the 'Copy' button to copy the sorted list to your clipboard."
        ]}
        benefits={[
          "Instant organization",
          "Handles mixed content",
          "Numeric sort intelligence",
          "Randomize function for shuffling"
        ]}
        faqs={[
          {
            question: "How does numeric sort work?",
            answer: "It extracts the first number found in each line and sorts based on that value, rather than alphabetical order (where 10 comes before 2)."
          },
          {
            question: "Can I sort a list of names?",
            answer: "Yes, simply paste the names (one per line) and click 'Sort A-Z' to organize them alphabetically."
          },
          {
            question: "Does it support special characters?",
            answer: "Yes, our sorter handles special characters and accents correctly according to standard locale rules."
          },
          {
            question: "Is there a limit to the list size?",
            answer: "You can sort thousands of lines instantly. Extremely large lists might take a split second longer."
          },
          {
            question: "Can I reverse the order?",
            answer: "Absolutely! Use the 'Sort Z-A' button to reverse the alphabetical order of your list."
          },
          {
            question: "Does it remove duplicates?",
            answer: "This tool focuses on sorting. To remove duplicates, please use our Duplicate Line Remover tool."
          },
          {
            question: "Is my data private?",
            answer: "Yes, all sorting happens in your browser. We do not store or send your data anywhere."
          },
          {
            question: "Can I randomize a list?",
            answer: "Yes, the 'Randomize' button will shuffle your list items into a random order."
          },
          {
            question: "Does case matter?",
            answer: "Our standard sort is case-insensitive, meaning 'apple' and 'Apple' are treated similarly."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, our Alphabetical Sorter is completely free to use without any restrictions."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
