import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { NotificationBar } from '../components/NotificationBar';
import { toolCategories } from '../config/tools';
import { Shield, Zap, Globe, RefreshCw, ArrowRight } from 'lucide-react';

export default function Home() {
  const keywords = [
    "online text tools", "free text utilities", "word counter", "character counter", 
    "online notepad", "text case converter", "remove extra spaces", "image to text", 
    "ocr online", "text manipulation tools", "web text editor", "seo text tools",
    "content creation tools", "text cleaner", "list sorter", "random text generator",
    "student writing tools", "essay generator", "citation generator", "homework helper"
  ];

  return (
    <div className="space-y-12">
      <SEO 
        title="SmartTextKit – Free Online Text Tools for Writers & Students"
        description="Use SmartTextKit to edit, format, convert, and generate text online. Simple, fast, and free browser tools for writers, bloggers, and students."
        keywords={keywords}
      />
      
      <div className="text-center space-y-6 py-12 md:py-20">
        <NotificationBar />
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto text-balance">
          Free Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Text Tools</span>
        </h1>
        <div className="max-w-2xl mx-auto space-y-4 text-base md:text-xl text-gray-600 font-medium leading-relaxed px-4">
          <p>SmartTextKit offers free online text tools to analyze, edit, and optimize your content. Quickly check word count, convert uppercase and lowercase, clean text, and improve writing productivity.</p>
          <p className="text-indigo-600 font-semibold text-base md:text-lg bg-indigo-50 inline-block px-4 py-1 rounded-full">
            100% private and secure—all processing happens directly in your browser.
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {toolCategories.map((category) => (
          <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, '-')}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool) => (
                <Link 
                  key={tool.name} 
                  to={tool.href}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex flex-col"
                >
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <tool.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{tool.desc}</p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm">
                    Open Tool <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 space-y-12 max-w-4xl mx-auto text-gray-700">
        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Online Text Tools for Fast and Easy Writing</h2>
          <p className="leading-relaxed text-gray-600 mb-4">
            SmartTextKit provides a powerful collection of free online text tools to help you write, edit, and format text quickly. Our platform includes essential text utilities like a word counter, character counter, case converter, online notepad, and text formatting tools designed for writers, students, developers, and digital marketers.
          </p>
          <p className="leading-relaxed text-gray-600 mb-4">
            You can easily clean text, remove extra spaces, convert text case, compare text files, and generate Lorem Ipsum content in seconds. All tools run directly in your browser, ensuring fast performance, privacy, and secure client-side processing.
          </p>
          <p className="leading-relaxed text-gray-600">
            Whether you are writing an article, preparing an assignment, coding, or creating social media content, SmartTextKit makes text editing simple and efficient.
          </p>
        </section>

        {/* Audience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Uses SmartTextKit Text Tools</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Digital Marketers & SEO Specialists
              </h3>
              <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-indigo-100">
                Digital marketers and SEO experts use our free online text tools to analyze keyword density, word count, and content formatting to improve search engine optimization and content performance.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Software Developers
              </h3>
              <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-indigo-100">
                Developers use SmartTextKit for JSON formatting, text comparison (diff checker), string manipulation, and code text utilities to quickly clean and process text data.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Students & Academic Writers
              </h3>
              <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-indigo-100">
                Students and researchers rely on our word counter, text editor, and writing tools to maintain accurate essay word counts, assignments, and academic papers.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Social Media Managers
              </h3>
              <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-indigo-100">
                Social media professionals use our text formatting tools and character counter to create perfectly sized posts for Twitter, Instagram, LinkedIn, and other social platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Why Created */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Created SmartTextKit Text Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Shield size={18} className="text-indigo-600" /> Privacy-First Online Text Tools
              </h3>
              <p className="text-sm text-gray-600">
                We created SmartTextKit because we believe your data should stay private. Our free online text tools process everything directly in your browser, so your text never leaves your device.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Zap size={18} className="text-indigo-600" /> Simple & Instant Text Utilities
              </h3>
              <p className="text-sm text-gray-600">
                No accounts, no downloads, and no paywalls. SmartTextKit offers fast text tools, word counters, case converters, and writing utilities that work instantly online.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Globe size={18} className="text-indigo-600" /> Accessible Text Tools for Everyone
              </h3>
              <p className="text-sm text-gray-600">
                Our browser-based text tools are optimized for speed and usability across all devices. Whether you are using a desktop, tablet, or mobile phone, SmartTextKit makes text editing easy.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <RefreshCw size={18} className="text-indigo-600" /> Growing Collection of Writing Tools
              </h3>
              <p className="text-sm text-gray-600">
                We continuously improve SmartTextKit by adding new text generators, formatting tools, and writing utilities based on user needs.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
            <span className="text-gray-300">|</span>
            <Link to="/sitemap" className="hover:text-indigo-600 hover:underline">Sitemap</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
