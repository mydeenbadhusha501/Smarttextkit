import React, { useState } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { X, List } from 'lucide-react';



export default function BulletPointGenerator() {
  const [text, setText] = useState('');
  const [bulletChar, setBulletChar] = useState('•');

  const addBullets = () => {
    const lines = text.split('\n');
    const bulleted = lines.map(line => {
      // Preserve indentation
      const match = line.match(/^(\s*)(.*)/);
      const indent = match ? match[1] : '';
      const content = match ? match[2] : line;
      
      if (!content) return line; // Empty line
      
      // Check if already has bullet (naive check)
      if (content.startsWith(bulletChar)) return line;
      
      return `${indent}${bulletChar} ${content}`;
    });
    setText(bulleted.join('\n'));
  };

  const removeBullets = () => {
    const lines = text.split('\n');
    const cleaned = lines.map(line => {
      return line.replace(/^[\s•\-\*1\.]+\s/, '');
    });
    setText(cleaned.join('\n'));
  };

  const keywords = [
    "bullet point generator", "add bullets to list", "text to list", "list maker", 
    "format list online", "add numbering to list", "bullet list creator", 
    "list formatter", "online list tool", "text to bullet points", "list organizer", 
    "checklist generator"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Bullet Point Generator - Create Lists Online"
        description="Free online bullet point generator. Turn text into formatted lists with dots, dashes, arrows, or checkmarks instantly. Perfect for presentations, emails, and documents."
        keywords={keywords}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Bullet Point Generator</h1>
          <div className="flex gap-2">
            <CopyButton text={text} />
            <button onClick={() => setText('')} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Style:</label>
            <select 
              value={bulletChar} 
              onChange={(e) => setBulletChar(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-sm"
            >
              <option value="•">• Dot</option>
              <option value="-">- Dash</option>
              <option value="*">* Asterisk</option>
              <option value="→">→ Arrow</option>
              <option value="✓">✓ Check</option>
            </select>
          </div>

          <button onClick={addBullets} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm">
            <List size={16} /> Add Bullets
          </button>
          <button onClick={removeBullets} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
            <X size={16} /> Remove Bullets
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your list here (one item per line)..."
          className="w-full h-64 p-6 resize-y focus:outline-none text-gray-700 leading-relaxed text-base"
        />
      </div>

      <SeoContent
        title="Bullet Point Generator"
        description="Transform plain text into professionally formatted lists with our Bullet Point Generator. Whether you're preparing presentation slides, organizing notes, or formatting an email, this tool lets you instantly add dots, dashes, arrows, or checkmarks to your list items. It also helps you clean up existing lists by removing unwanted bullet points."
        targetAudience={[
          "Presenters creating slides",
          "Writers formatting articles",
          "Students organizing notes",
          "Email marketers structuring content"
        ]}
        howToUse={[
          "Paste your list of items into the text area (one item per line).",
          "Select your preferred bullet style from the dropdown menu (Dot, Dash, Asterisk, Arrow, or Check).",
          "Click 'Add Bullets' to apply the formatting instantly.",
          "If you need to revert changes or clean up a list, click 'Remove Bullets'.",
          "Copy the formatted list to your clipboard."
        ]}
        benefits={[
          "Consistent formatting",
          "Multiple bullet styles",
          "Instant conversion",
          "Clean up existing lists"
        ]}
        faqs={[
          {
            question: "Can I use numbered lists?",
            answer: "Currently, this tool focuses on symbol bullets. For numbered lists, you can manually type numbers or use a word processor."
          },
          {
            question: "Does it preserve indentation?",
            answer: "Yes, the tool attempts to preserve existing indentation when adding bullets."
          },
          {
            question: "Can I mix bullet styles?",
            answer: "The tool applies one style to the entire selection. To mix styles, process different parts of your list separately."
          },
          {
            question: "Is there a limit to the list length?",
            answer: "No, you can format lists of any length instantly."
          },
          {
            question: "Does it work with special characters?",
            answer: "Yes, it supports all standard text characters and symbols."
          },
          {
            question: "Can I remove bullets from a list I pasted?",
            answer: "Yes, the 'Remove Bullets' function is designed to strip common bullet characters from the start of lines."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Do I need to install anything?",
            answer: "No, it works entirely in your web browser."
          },
          {
            question: "Can I use custom bullet characters?",
            answer: "Currently, we offer a preset selection of popular bullet styles. We may add custom input in the future."
          },
          {
            question: "Is my data private?",
            answer: "Yes, all processing happens locally in your browser. We do not store your text."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
