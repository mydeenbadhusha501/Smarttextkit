import React from 'react';
import { Shield, Zap, Globe, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About SmartTextKit</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We provide free, secure, and efficient online text tools for everyone.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At SmartTextKit, our mission is simple: to provide the most accessible, fast, and secure text manipulation tools on the web. 
          We believe that basic digital utilities should be free and easy to use without requiring software downloads or account registrations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you are a student, developer, writer, or digital marketer, our suite of tools is designed to help you work smarter and faster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy First</h3>
          <p className="text-gray-600">
            We prioritize your privacy. Unlike many other online tools, SmartTextKit processes your data locally in your browser. 
            Your text never leaves your device, ensuring complete confidentiality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
          <p className="text-gray-600">
            Built with modern web technologies, our tools load instantly and perform complex operations in milliseconds. 
            No waiting for server uploads or downloads.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Always Free</h3>
          <p className="text-gray-600">
            We are committed to keeping our core tools 100% free forever. No paywalls, no hidden fees, and no credit card required.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
          <p className="text-gray-600">
            We listen to our users. Many of our features and tools are direct results of feedback from our community.
          </p>
        </div>
      </div>

      <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center gap-2">
            <CheckCircle size={32} className="text-indigo-400" />
            <span className="font-medium">No Registration</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle size={32} className="text-indigo-400" />
            <span className="font-medium">Secure Processing</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle size={32} className="text-indigo-400" />
            <span className="font-medium">Mobile Friendly</span>
          </div>
        </div>
      </div>

      {/* Internal Links */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-indigo-600 hover:underline">Home</Link>
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
  );
}
