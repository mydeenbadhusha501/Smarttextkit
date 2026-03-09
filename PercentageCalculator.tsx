import React, { useState } from 'react';
import { Percent } from 'lucide-react';

export default function PercentageCalculator() {
  const [val1, setVal1] = useState<number | ''>('');
  const [val2, setVal2] = useState<number | ''>('');
  const [result1, setResult1] = useState<number | null>(null);

  const [val3, setVal3] = useState<number | ''>('');
  const [val4, setVal4] = useState<number | ''>('');
  const [result2, setResult2] = useState<number | null>(null);

  const [val5, setVal5] = useState<number | ''>('');
  const [val6, setVal6] = useState<number | ''>('');
  const [result3, setResult3] = useState<number | null>(null);

  const calculate1 = () => {
    if (val1 && val2) setResult1((Number(val1) / 100) * Number(val2));
  };

  const calculate2 = () => {
    if (val3 && val4) setResult2((Number(val3) / Number(val4)) * 100);
  };

  const calculate3 = () => {
    if (val5 && val6) setResult3(((Number(val6) - Number(val5)) / Number(val5)) * 100);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Percentage Calculator</h1>
        <p className="text-gray-600">Calculate percentages easily.</p>
      </div>

      <div className="grid gap-6">
        {/* What is X% of Y? */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Percent size={20} className="text-indigo-600" /> What is X% of Y?
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>What is</span>
            <input
              type="number"
              value={val1}
              onChange={(e) => setVal1(Number(e.target.value))}
              placeholder="X"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <span>% of</span>
            <input
              type="number"
              value={val2}
              onChange={(e) => setVal2(Number(e.target.value))}
              placeholder="Y"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={calculate1}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Calculate
            </button>
          </div>
          {result1 !== null && (
            <div className="mt-4 text-xl font-bold text-gray-900">
              Result: <span className="text-indigo-600">{result1}</span>
            </div>
          )}
        </div>

        {/* X is what % of Y? */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Percent size={20} className="text-indigo-600" /> X is what % of Y?
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="number"
              value={val3}
              onChange={(e) => setVal3(Number(e.target.value))}
              placeholder="X"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <span>is what % of</span>
            <input
              type="number"
              value={val4}
              onChange={(e) => setVal4(Number(e.target.value))}
              placeholder="Y"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={calculate2}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Calculate
            </button>
          </div>
          {result2 !== null && (
            <div className="mt-4 text-xl font-bold text-gray-900">
              Result: <span className="text-indigo-600">{result2.toFixed(2)}%</span>
            </div>
          )}
        </div>

        {/* Percentage Change */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Percent size={20} className="text-indigo-600" /> Percentage Change
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>From</span>
            <input
              type="number"
              value={val5}
              onChange={(e) => setVal5(Number(e.target.value))}
              placeholder="Start"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <span>to</span>
            <input
              type="number"
              value={val6}
              onChange={(e) => setVal6(Number(e.target.value))}
              placeholder="End"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={calculate3}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Calculate
            </button>
          </div>
          {result3 !== null && (
            <div className="mt-4 text-xl font-bold text-gray-900">
              Result: <span className={result3 >= 0 ? "text-green-600" : "text-red-600"}>
                {result3 > 0 ? '+' : ''}{result3.toFixed(2)}%
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Percentage Calculator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Percentage Calculator is a comprehensive tool designed to solve the most common percentage-related problems. Whether you need to find a percentage of a number, determine what percentage one number is of another, or calculate the percentage increase or decrease between two values, this tool handles it all with simple inputs and instant results.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Three Calculation Modes: Covers standard percentage, reverse percentage, and percentage change.",
              "Instant Results: Calculations appear immediately after clicking the calculate button.",
              "Percentage Change Indicator: Automatically highlights increases in green and decreases in red.",
              "Simple Inputs: Just enter your numbers and get the answer—no complex formulas needed.",
              "Mobile Friendly: Easy to use on any device."
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
              "Choose the calculation type you need from the three available cards.",
              "For 'What is X% of Y?', enter the percentage and the total number.",
              "For 'X is what % of Y?', enter the part and the whole number.",
              "For 'Percentage Change', enter the starting value and the ending value.",
              "Click the 'Calculate' button in the respective section to see your result."
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
