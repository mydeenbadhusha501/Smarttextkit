import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, ShieldCheck, Users, Heart } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setIsSubmitted(true);
    }
  }, [searchParams]);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We value your feedback and are here to help. Whether you have a suggestion, a bug report, or just want to say hello, we'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MessageSquare className="text-indigo-600" /> Send us a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  window.history.replaceState({}, '', '/contact');
                }}
                className="text-indigo-600 font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form action="https://formsubmit.co/CleanPixelWallpaper@Gmail.com" method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Feedback from SmartTextKit" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}/contact?success=true`} />
              <input type="hidden" name="_template" value="table" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="feedback">General Feedback</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none outline-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          )}
        </div>

        {/* Trust & Info Sidebar */}
        <div className="space-y-6">
          {/* Trust Card */}
          <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-indigo-300" /> Why Trust Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} />
                </div>
                <span className="text-indigo-100 text-sm">100% Client-Side Processing. Your data never leaves your browser.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} />
                </div>
                <span className="text-indigo-100 text-sm">Open and Transparent. No hidden fees or subscriptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} />
                </div>
                <span className="text-indigo-100 text-sm">Regularly Updated. We listen to user feedback to improve tools.</span>
              </li>
            </ul>
          </div>

          {/* Community Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="text-indigo-600" /> Join Our Community
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Join thousands of users who rely on SmartTextKit for their daily text processing needs.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
              <span className="flex items-center gap-1"><Heart size={14} className="text-red-500" /> Made with love</span>
              <span>© {new Date().getFullYear()} SmartTextKit</span>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email Us Directly</p>
              <a href="mailto:CleanPixelWallpaper@Gmail.com" className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors break-all">
                CleanPixelWallpaper@Gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Links */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-indigo-600 hover:underline">Home</Link>
          <span className="text-gray-300">|</span>
          <Link to="/about-us" className="hover:text-indigo-600 hover:underline">About Us</Link>
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
      </div>
    </div>
  );
}
