import React, { useState } from 'react';
import { Clock, FileText } from 'lucide-react';

export default function ReadingTimeCalculator() {
  const [text, setText] = useState('');
  const [wpm, setWpm] = useState(200);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const minutes = Math.ceil(words / wpm);
  const seconds = Math.ceil((words % wpm) / (wpm / 60));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Reading Time Calculator</h1>
        <p className="text-gray-600">Estimate how long it takes to read your text.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <label className="text-sm font-medium text-gray-700">Reading Speed (WPM):</label>
          <input
            type="number"
            value={wpm}
            onChange={(e) => setWpm(Number(e.target.value) || 200)}
            className="w-24 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full mb-3">
            <Clock size={24} />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {minutes < 1 ? `${seconds} sec` : `${minutes} min`}
          </div>
          <div className="text-sm text-gray-500">Estimated Reading Time</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
            <FileText size={24} />
          </div>
          <div className="text-2xl font-bold text-gray-900">{words}</div>
          <div className="text-sm text-gray-500">Word Count</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Reading Time Calculator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Reading Time Calculator is a simple yet powerful tool designed to help writers, bloggers, and content creators estimate how long it will take for an average reader to read their text. By analyzing the word count and applying a standard reading speed (Words Per Minute), it provides an accurate time estimate in minutes and seconds.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Instant Calculation: See results immediately as you type or paste text.",
              "Adjustable Reading Speed: Customize the Words Per Minute (WPM) to match your target audience.",
              "Word Count Integration: Automatically counts words alongside the time estimate.",
              "Privacy Focused: All processing happens in your browser; your text is never sent to a server.",
              "Clean Interface: Distraction-free design for focused writing and analysis."
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          <div className="space-y-4">
            {[
              "Paste or type your text into the large text area.",
              "The tool will automatically count the words and calculate the reading time based on the default speed (200 WPM).",
              "If you want to adjust the reading speed, change the number in the 'Reading Speed (WPM)' input field.",
              "The estimated time (in minutes and seconds) and total word count will be displayed instantly below the text area."
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-600 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
