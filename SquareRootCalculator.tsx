import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function SquareRootCalculator() {
  const [number, setNumber] = useState<number | ''>('');
  
  const result = number ? Math.sqrt(Number(number)) : null;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Square Root Calculator</h1>
        <p className="text-gray-600">Find the square root of any number.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Enter Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            placeholder="e.g. 144"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {result !== null && !isNaN(result) && (
          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500 mb-2">Square Root</div>
            <div className="text-4xl font-bold text-indigo-600">{Number.isInteger(result) ? result : result.toFixed(4)}</div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Square Root Calculator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Square Root Calculator is a mathematical utility that finds the principal square root of any non-negative number. The square root of a number is a value that, when multiplied by itself, gives the original number. This tool is essential for geometry, algebra, and general mathematical problem-solving.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "High Precision: Calculates square roots with decimal accuracy.",
              "Instant Results: Updates immediately as you type or enter a number.",
              "Supports Decimals: Can calculate square roots of non-integer numbers.",
              "Clean Display: Shows the result in a large, easy-to-read format.",
              "Error Handling: Handles negative numbers gracefully (as real square roots are undefined for them)."
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
              "Enter a number into the input field.",
              "The calculator will instantly compute the square root.",
              "The result will be displayed below the input field.",
              "If the result is an integer, it shows as a whole number; otherwise, it shows up to 4 decimal places."
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
