import React, { useState } from 'react';
import { Delete, Equal } from 'lucide-react';

export default function SimpleCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(`${display} ${op} `);
    setIsNewNumber(true);
  };

  const calculate = () => {
    try {
      // Note: Using eval is generally unsafe, but for a simple client-side calculator with sanitized input it's acceptable.
      // A better approach would be a parser, but for brevity:
      const fullEquation = equation + display;
      // eslint-disable-next-line no-eval
      const result = eval(fullEquation.replace('×', '*').replace('÷', '/'));
      setDisplay(String(result));
      setEquation('');
      setIsNewNumber(true);
    } catch (e) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const buttons = [
    'C', '(', ')', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Simple Calculator Pro</h1>
        <p className="text-gray-600">A clean, simple calculator for everyday math.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
        <div className="bg-gray-100 p-4 rounded-xl mb-4 text-right h-24 flex flex-col justify-end">
          <div className="text-gray-500 text-sm h-6">{equation}</div>
          <div className="text-4xl font-mono font-bold text-gray-900 truncate">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === 'C') clear();
                else if (btn === '=') calculate();
                else if (['+', '-', '×', '÷'].includes(btn)) handleOperator(btn);
                else handleNumber(btn);
              }}
              className={`
                p-4 rounded-xl text-xl font-bold transition-all active:scale-95
                ${btn === '=' ? 'col-span-2 bg-indigo-600 text-white hover:bg-indigo-700' : ''}
                ${['C'].includes(btn) ? 'bg-red-100 text-red-600 hover:bg-red-200' : ''}
                ${['+', '-', '×', '÷'].includes(btn) ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100' : ''}
                ${!['=', 'C', '+', '-', '×', '÷'].includes(btn) ? 'bg-gray-50 text-gray-900 hover:bg-gray-100' : ''}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Simple Calculator Pro?</h2>
          <p className="text-gray-600 leading-relaxed">
            Simple Calculator Pro is a clean, user-friendly online calculator designed for everyday arithmetic. Whether you need to add up expenses, subtract costs, multiply quantities, or divide shares, this tool provides a reliable and quick way to perform calculations right in your browser. It features a clear display and a history of your current operation.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Basic Operations: Supports addition, subtraction, multiplication, and division.",
              "Clear Display: Large, easy-to-read numbers with a secondary view for the current equation.",
              "Responsive Design: Works perfectly on desktops, tablets, and mobile phones.",
              "Instant Reset: 'C' button to quickly clear your calculation and start over.",
              "Error Handling: Gracefully handles invalid operations."
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
              "Enter numbers by clicking the numeric buttons (0-9).",
              "Select an operation (+, -, ×, ÷) to perform a calculation.",
              "Continue entering numbers for the next part of your equation.",
              "Press the equals (=) button to see the final result.",
              "Use the 'C' button to clear the display and reset the calculator."
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
