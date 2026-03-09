import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X } from 'lucide-react';



export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = {
    words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    sentences: text.split(/[.!?]+/).filter(Boolean).length,
    paragraphs: text.split(/\n+/).filter(Boolean).length,
  };

  const keywords = [
    "word counter", "character counter", "sentence counter", "paragraph counter", 
    "online word count", "free text analyzer", "word count tool", "check word count", 
    "letter counter", "essay word count", "twitter character count", "real-time word counter", 
    "text length checker", "word frequency"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Word Counter - Count Words & Characters Online"
        description="Free online word counter and character counter. Count words, characters, sentences, and paragraphs in real-time. Perfect for essays, tweets, and SEO content. Fast and accurate."
        keywords={keywords}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-1">{stats.words}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Words</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-1">{stats.characters}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Characters</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-1">{stats.sentences}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Sentences</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-1">{stats.paragraphs}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Paragraphs</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-1">{stats.charactersNoSpaces}</div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Char (No Space)</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Word Counter</h1>
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
          placeholder="Paste or type your text here to analyze..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Word Counter"
        description="Experience the ultimate precision with our Word Counter, a free online tool designed to count words, characters, sentences, and paragraphs in real-time. Whether you are a student crafting an essay, a professional writing a report, or a social media manager optimizing tweets, our tool ensures you meet your length requirements effortlessly. This text analyzer provides instant feedback, helping you improve your writing efficiency and adhere to strict word limits without any hassle."
        targetAudience={[
          "Students writing essays with strict word limits",
          "Social media managers crafting posts for Twitter/X (character limits)",
          "Bloggers and SEO specialists optimizing content length",
          "Translators estimating work volume"
        ]}
        howToUse={[
          "Start by typing or pasting your text directly into the main input area.",
          "Watch as the counters for words, characters, sentences, and paragraphs update instantly in real-time.",
          "Review the detailed statistics displayed above the text box to ensure you meet your specific requirements.",
          "Use the 'Copy' button to quickly copy your text to the clipboard.",
          "Click the 'Clear' button (X icon) to reset the text area and start over with a new document."
        ]}
        benefits={[
          "Real-time analysis without page reloads",
          "Accurate counting algorithms",
          "Privacy-focused (text is processed in your browser)",
          "Detailed breakdown beyond just simple word counts",
          "Character count with and without spaces"
        ]}
        faqs={[
          {
            question: "Does this tool count spaces as characters?",
            answer: "We provide two character counts: one including spaces and one excluding them, so you have the data you need."
          },
          {
            question: "Is there a limit to how much text I can check?",
            answer: "There is no hard limit, but extremely large documents (hundreds of pages) might slow down your browser slightly."
          },
          {
            question: "Do you save my text?",
            answer: "No. All processing happens instantly in your web browser. We do not store or transmit your text."
          },
          {
            question: "Is this word counter free to use?",
            answer: "Yes, our word counter is completely free to use for unlimited text analysis."
          },
          {
            question: "Does it count numbers as words?",
            answer: "Yes, numbers separated by spaces are typically counted as words."
          },
          {
            question: "Can I use this on my mobile phone?",
            answer: "Absolutely! Our tool is fully responsive and works great on smartphones and tablets."
          },
          {
            question: "Does it work offline?",
            answer: "Once the page is loaded, the counting logic runs in your browser, so it can work without an active internet connection."
          },
          {
            question: "How accurate is the sentence counter?",
            answer: "It uses standard punctuation (periods, exclamation marks, question marks) to detect sentences, providing a high level of accuracy."
          },
          {
            question: "Can I count words in PDF or Word documents?",
            answer: "You need to copy the text from your document and paste it into our tool to count the words."
          },
          {
            question: "Is my data secure?",
            answer: "Yes, since all processing is done client-side, your text never leaves your device."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
