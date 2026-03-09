import React from 'react';
import { Link } from 'react-router-dom';
import { toolCategories } from '../config/tools';
import { SEO } from '../components/SEO';
import { Map } from 'lucide-react';

export default function Sitemap() {
  const keywords = [
    "sitemap", "all tools", "text tools list", "online utilities directory", 
    "smarttextkit tools", "free online tools list"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SEO 
        title="Sitemap - All Free Online Text Tools"
        description="Browse our complete list of free online text tools. Find word counters, text converters, generators, and writing utilities all in one place."
        keywords={keywords}
      />
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Map size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">All Tools & Pages</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {toolCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                {category.name}
              </h2>
              <ul className="space-y-2 pl-4">
                {category.tools.map((tool) => (
                  <li key={tool.name}>
                    <Link 
                      to={tool.href}
                      className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gray-500 rounded-full"></span>
              General Pages
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-indigo-600 hover:underline transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-indigo-400 transition-colors"></span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Internal Links */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-indigo-600 hover:underline">Home</Link>
          <span className="text-gray-300">|</span>
          <Link to="/about-us" className="hover:text-indigo-600 hover:underline">About Us</Link>
          <span className="text-gray-300">|</span>
          <Link to="/contact-us" className="hover:text-indigo-600 hover:underline">Contact Us</Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy" className="hover:text-indigo-600 hover:underline">Privacy Policy</Link>
          <span className="text-gray-300">|</span>
          <Link to="/terms-of-service" className="hover:text-indigo-600 hover:underline">Terms of Service</Link>
          <span className="text-gray-300">|</span>
          <Link to="/disclaimer" className="hover:text-indigo-600 hover:underline">Disclaimer</Link>
          <span className="text-gray-300">|</span>
          <Link to="/cookies" className="hover:text-indigo-600 hover:underline">Cookie Policy</Link>
        </div>
      </section>
    </div>
  );
}
