import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function AgeCalculator() {
  const [day, setDay] = useState<number | ''>('');
  const [month, setMonth] = useState<number | ''>('');
  const [year, setYear] = useState<number | ''>('');
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (m: number, y: number) => {
    return new Date(y, m, 0).getDate();
  };

  const calculateAge = () => {
    if (!day || !month || !year) return;

    const today = new Date();
    const birth = new Date(Number(year), Number(month) - 1, Number(day));
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += prevMonth.getDate();
      months--;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Age Calculator</h1>
        <p className="text-gray-600">Calculate your exact age in years, months, and days.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Day Select */}
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Day</label>
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Month Select */}
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Month</label>
              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">Month</option>
                {months.map((m, index) => (
                  <option key={m} value={index + 1}>{m}</option>
                ))}
              </select>
            </div>

            {/* Year Select */}
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Year</label>
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={calculateAge}
            className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors mt-4"
          >
            Calculate Age
          </button>
        </div>

        {age && (
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-indigo-600">{age.years}</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">{age.months}</div>
              <div className="text-sm text-gray-600">Months</div>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <div className="text-3xl font-bold text-pink-600">{age.days}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-12 space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the Age Calculator?</h2>
          <p className="text-gray-600 leading-relaxed">
            The Age Calculator is a precise tool that determines your exact age based on your date of birth. While it's easy to know your age in years, this calculator goes further by providing the exact number of years, months, and days you have been alive. It accounts for leap years and varying month lengths to ensure accuracy.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Exact Precision: Calculates age down to the specific day.",
              "Leap Year Support: Correctly handles leap years for accurate calculations.",
              "Detailed Breakdown: Shows years, months, and days separately.",
              "Simple Interface: Just pick a date and click calculate.",
              "Versatile Use: Can be used to calculate the duration of events or age of items, not just people."
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
              "Click on the date input field to open the calendar picker.",
              "Select your date of birth (or the start date of an event).",
              "Click the 'Calculate Age' button.",
              "View your detailed age breakdown in Years, Months, and Days displayed below."
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
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs This Tool?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-indigo-50 rounded-xl">
              <Calendar className="text-indigo-600 mb-2" />
              <h3 className="font-bold text-gray-900">Individuals</h3>
              <p className="text-sm text-gray-600 mt-1">To satisfy curiosity about their exact age in days or months.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <Clock className="text-purple-600 mb-2" />
              <h3 className="font-bold text-gray-900">HR Professionals</h3>
              <p className="text-sm text-gray-600 mt-1">To calculate employee tenure or retirement eligibility dates.</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <Calendar className="text-pink-600 mb-2" />
              <h3 className="font-bold text-gray-900">Event Planners</h3>
              <p className="text-sm text-gray-600 mt-1">To determine age groups for registration or eligibility verification.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
