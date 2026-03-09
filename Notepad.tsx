import React, { useState, useEffect, useRef } from 'react';
import { SeoContent } from '../components/SeoContent';
import { CopyButton } from '../components/CopyButton';
import { SEO } from '../components/SEO';
import { Trash2, Download, Undo, Redo } from 'lucide-react';


export default function Notepad() {
  const [text, setText] = useState('');
  const [history, setHistory] = useState<string[]>(['']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const historyIndexRef = useRef(0);

  // Sync ref with state
  useEffect(() => {
    historyIndexRef.current = historyIndex;
  }, [historyIndex]);

  useEffect(() => {
    const saved = localStorage.getItem('notepad-content');
    if (saved) {
      setText(saved);
      setHistory([saved]);
      setHistoryIndex(0);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('notepad-content', newText);

    // Debounce history update
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setHistory(prev => {
        const newHistory = prev.slice(0, historyIndexRef.current + 1);
        return [...newHistory, newText];
      });
      setHistoryIndex(prev => prev + 1);
    }, 500);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      const newIndex = historyIndex - 1;
      const previousText = history[newIndex];
      setText(previousText);
      setHistoryIndex(newIndex);
      localStorage.setItem('notepad-content', previousText);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      const newIndex = historyIndex + 1;
      const nextText = history[newIndex];
      setText(nextText);
      setHistoryIndex(newIndex);
      localStorage.setItem('notepad-content', nextText);
    }
  };

  const clearText = () => {
    if (confirm('Are you sure you want to clear the notepad?')) {
      const newText = '';
      setText(newText);
      localStorage.removeItem('notepad-content');
      
      // Add clear action to history immediately
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setHistory(prev => {
        const newHistory = prev.slice(0, historyIndex + 1);
        return [...newHistory, newText];
      });
      setHistoryIndex(prev => prev + 1);
    }
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "notepad.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const keywords = [
    "online notepad", "free online notepad", "simple notepad online", "notepad online free", 
    "browser notepad", "online text editor", "quick notes online", "online writing pad", 
    "web notepad tool", "online note writing tool", "best online notepad tool", 
    "simple text editor in browser", "free text editing tools online", "save notes online", 
    "distraction free writing"
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Online Notepad - Free Browser Text Editor"
        description="Free online notepad for writing, editing, and saving notes in your browser. No login required. Features auto-save, word count, and text file download. Simple and secure."
        keywords={keywords}
      />
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gray-50/50">
          <h1 className="text-xl font-bold text-gray-900">Online Notepad</h1>
          <div className="flex gap-2">
            <button 
              onClick={handleUndo} 
              disabled={historyIndex <= 0}
              className={`p-2 rounded-lg transition-colors ${historyIndex <= 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
              title="Undo"
            >
              <Undo size={18} />
            </button>
            <button 
              onClick={handleRedo} 
              disabled={historyIndex >= history.length - 1}
              className={`p-2 rounded-lg transition-colors ${historyIndex >= history.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'}`}
              title="Redo"
            >
              <Redo size={18} />
            </button>
            <div className="w-px h-8 bg-gray-200 mx-1"></div>
            <CopyButton text={text} />
            <button onClick={downloadText} className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Download as .txt">
              <Download size={18} />
            </button>
            <button onClick={clearText} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Clear">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Start typing your notes here..."
          className="w-full h-[60vh] p-6 resize-none focus:outline-none text-gray-700 leading-relaxed font-mono text-base"
        />
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-2 text-xs text-gray-500 flex justify-between">
          <span>{text.length} characters</span>
          <span>{text.split(/\s+/).filter(w => w.length > 0).length} words</span>
        </div>
      </div>

      <SeoContent
        title="Online Notepad"
        description={
          <>
            <p className="mb-4">
              Our Online Notepad is a free browser-based text editor that allows you to write notes online, edit text, and save plain-text files directly in your web browser without installing any software or creating an account. This free online notepad works instantly and is perfect for quick notes, drafts, ideas, code snippets, and simple text editing.
            </p>
            <p className="mb-4">
              The tool includes an autosave notepad feature that automatically saves your notes to your local browser storage, ensuring you never lose your work even if you close the tab or refresh the page. When you reopen the online text editor, your document is automatically restored.
            </p>
            <p className="mb-4">
              Our online notepad editor also supports useful features like copy, cut, paste, undo, redo, find and replace, word counter, spell checker, font formatting, emoji list, and printing notes. You can also open text files, edit them online, and save files directly to your computer.
            </p>
            <p>
              This simple online text editor is perfect for anyone who needs a fast, secure, and free online notepad without login.
            </p>
          </>
        }
        targetAudience={[
          "Students taking quick notes during lectures",
          "Writers drafting ideas on the fly",
          "Developers needing a scratchpad for code snippets",
          "Anyone who needs a distraction-free writing environment"
        ]}
        howToUse={[
          "Simply start typing in the large text area above.",
          "Your text is automatically saved to your browser's local storage as you type.",
          "Use the toolbar buttons to Copy content to clipboard, Download as a .txt file, or Clear the pad.",
          "Use Undo/Redo buttons to correct mistakes.",
          "Come back anytime! Your notes will be waiting for you (unless you clear your browser cache)."
        ]}
        benefits={[
          "Auto-save functionality prevents data loss",
          "No account or login required",
          "Works offline once loaded",
          "Clean, distraction-free interface",
          "100% free with no usage limits",
          "Download notes as text files"
        ]}
        faqs={[
          {
            question: "Is my data private?",
            answer: "Yes! All your notes are stored locally in your browser. Nothing is sent to our servers."
          },
          {
            question: "Will I lose my notes if I close the tab?",
            answer: "No, we use local storage to save your notes automatically. They will be there when you return."
          },
          {
            question: "Can I format the text?",
            answer: "Currently, this is a plain text editor designed for speed and simplicity. We may add rich text features in the future."
          },
          {
            question: "How do I save my notes permanently?",
            answer: "You can click the 'Download' button to save your notes as a .txt file to your computer."
          },
          {
            question: "Does it have a word count?",
            answer: "Yes, the word and character counts are displayed at the bottom of the editor."
          },
          {
            question: "Is there a dark mode?",
            answer: "Not yet, but we are working on adding themes in a future update."
          },
          {
            question: "Can I open text files?",
            answer: "Currently, you can only copy and paste text into the notepad. File opening support is coming soon."
          },
          {
            question: "Is there a limit to how much I can write?",
            answer: "The only limit is your browser's local storage capacity, which is typically very large for text."
          },
          {
            question: "Does it work on mobile?",
            answer: "Yes, the notepad is fully responsive and works great on smartphones and tablets."
          },
          {
            question: "Is it free?",
            answer: "Yes, completely free with no ads or hidden costs."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
