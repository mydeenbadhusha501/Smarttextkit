import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X, ArrowLeftRight } from 'lucide-react';
import * as Diff from 'diff';



export default function DiffChecker() {
  const [original, setOriginal] = useState('');
  const [modified, setModified] = useState('');
  const [diffResult, setDiffResult] = useState<Diff.Change[] | null>(null);

  const compareText = () => {
    const diff = Diff.diffWords(original, modified);
    setDiffResult(diff);
  };

  const keywords = [
    "diff checker", "compare text", "text difference", "file comparison tool", 
    "compare two texts", "diff tool online", "check text differences", 
    "text compare online", "code diff checker", "find differences in text", 
    "compare documents", "text diff viewer"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Diff Checker - Compare Text Differences"
        description="Free online diff checker. Compare two text blocks or code snippets to find differences, additions, and removals instantly. Highlight changes in green and red."
        keywords={keywords}
      />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="font-semibold text-gray-700">Original Text</label>
            <CopyButton text={original} className="p-1" />
          </div>
          <textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            className="w-full h-64 p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            placeholder="Paste original text here..."
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="font-semibold text-gray-700">Modified Text</label>
            <CopyButton text={modified} className="p-1" />
          </div>
          <textarea
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            className="w-full h-64 p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            placeholder="Paste modified text here..."
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={compareText}
          className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          <ArrowLeftRight size={20} />
          Compare Text
        </button>
      </div>

      {diffResult && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4 bg-gray-50/50">
            <h2 className="text-xl font-bold text-gray-900">Comparison Result</h2>
          </div>
          <div className="p-6 leading-relaxed text-gray-800 whitespace-pre-wrap font-mono text-sm">
            {diffResult.map((part, index) => {
              const color = part.added ? 'bg-green-100 text-green-800' : part.removed ? 'bg-red-100 text-red-800 decoration-red-500 line-through' : 'text-gray-500';
              return (
                <span key={index} className={`${color} px-0.5 rounded`}>
                  {part.value}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <SeoContent
        title="Text Compare (Diff Checker)"
        description="A powerful tool to compare two blocks of text and highlight the differences. It shows you exactly what has been added, removed, or changed between two versions of a document. Ideal for checking code changes, proofreading revisions, or finding plagiarism."
        targetAudience={[
          "Developers comparing code snippets",
          "Writers checking revisions of a draft",
          "Editors looking for changes in content",
          "Students comparing notes",
          "Legal professionals comparing contract versions"
        ]}
        howToUse={[
          "Paste the original text in the left box.",
          "Paste the modified text in the right box.",
          "Click 'Compare Text'.",
          "View the result below: Green highlights additions, Red highlights removals."
        ]}
        benefits={[
          "Visual difference highlighting",
          "Word-by-word comparison",
          "Instant results",
          "No file upload required",
          "Works with code and plain text"
        ]}
        faqs={[
          {
            question: "Is this case sensitive?",
            answer: "Yes, 'Word' and 'word' will be treated as different."
          },
          {
            question: "Can I compare code?",
            answer: "Yes, it works great for comparing code snippets to find bugs or changes."
          },
          {
            question: "Is there a limit to the text size?",
            answer: "The tool can handle large blocks of text, but extremely large files might slow down your browser."
          },
          {
            question: "Does it work with different languages?",
            answer: "Yes, it compares characters, so it works with any language."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Is my data private?",
            answer: "Yes, the comparison happens locally in your browser. We do not store your text."
          },
          {
            question: "Can I compare Word documents?",
            answer: "You need to copy and paste the text from your Word documents into the text boxes."
          },
          {
            question: "What do the colors mean?",
            answer: "Green indicates added text, while Red indicates removed text."
          },
          {
            question: "Can I edit the text after comparing?",
            answer: "Yes, you can modify the text in the boxes and click 'Compare Text' again to update the result."
          },
          {
            question: "Does it ignore whitespace?",
            answer: "Our standard comparison respects whitespace, but we may add an option to ignore it in the future."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
