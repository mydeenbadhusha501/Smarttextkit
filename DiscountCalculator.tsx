import React, { useState } from 'react';
import { Tag, DollarSign } from 'lucide-react';

export default function DiscountCalculator() {
  const [price, setPrice] = useState<number | ''>('');
  const [discount, setDiscount] = useState<number | ''>('');
  
  const savings = price && discount ? (Number(price) * Number(discount)) / 100 : 0;
  const finalPrice = price ? Number(price) - savings : 0;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Discount Calculator</h1>
        <p className="text-gray-600">Calculate the final price after discount.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Original Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
            <span className="text-green-800 font-medium">You Save</span>
            <span className="text-2xl font-bold text-green-600">${savings.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
            <span className="text-indigo-800 font-medium">Final Price</span>
            <span className="text-3xl font-bold text-indigo-600">${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Discount Calculator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Discount Calculator is a handy shopping utility that helps you quickly determine the final price of an item after a percentage discount is applied. It also calculates exactly how much money you are saving. This tool is perfect for shoppers wanting to double-check sales prices or business owners calculating markdown prices.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Dual Output: Shows both the final price and the total amount saved.",
              "Real-Time Calculation: Results update instantly as you type.",
              "Simple Inputs: Requires only the original price and discount percentage.",
              "Clear Visuals: Distinct sections for savings and final price for quick reading.",
              "Currency Neutral: Works with any currency values."
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
              "Enter the original price of the item in the 'Original Price' field.",
              "Enter the discount percentage in the 'Discount (%)' field.",
              "The calculator will automatically compute the results.",
              "View 'You Save' to see the discount amount and 'Final Price' to see what you pay."
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
