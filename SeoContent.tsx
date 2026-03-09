import React from 'react';
import { motion } from 'motion/react';

interface SeoSectionProps {
  title: string;
  description: string; // What is this tool?
  targetAudience: string[]; // Who needs it?
  howToUse: string[]; // How it works?
  benefits: string[]; // Why use ours?
  faqs: { question: string; answer: string }[]; // FAQ section
  keywords?: string[]; // Related keywords
}

export function SeoContent({ title, description, targetAudience, howToUse, benefits, faqs, keywords }: SeoSectionProps) {
  return (
    <div className="mt-16 space-y-12 max-w-4xl mx-auto text-gray-700">
      
      {/* What is this tool? */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the {title}?</h2>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </section>

      {/* Who needs it? */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs This Tool?</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {targetAudience.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works? */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Guide</h2>
        <div className="relative border-l-2 border-indigo-100 pl-6 space-y-6">
          {howToUse.map((step, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600 ring-4 ring-white">
                {index + 1}
              </span>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why use ours? */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our {title}?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="font-medium text-gray-900">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
