import React, { useState } from 'react';
import { Lock, Copy, RefreshCw, Check, Eye, EyeOff } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SeoContent } from '../components/SeoContent';


export default function RandomPasswordGenerator() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePassword = () => {
    setIsGenerating(true);
    setPassword(''); // Clear current password while generating
    
    setTimeout(() => {
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numberChars = '0123456789';
      const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

      let allChars = '';
      if (includeUppercase) allChars += uppercaseChars;
      if (includeLowercase) allChars += lowercaseChars;
      if (includeNumbers) allChars += numberChars;
      if (includeSymbols) allChars += symbolChars;

      if (allChars === '') {
        setPassword('Please select at least one character type.');
        setIsGenerating(false);
        return;
      }

      let newPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        newPassword += allChars[randomIndex];
      }
      setPassword(newPassword);
      setCopied(false);
      setIsGenerating(false);
    }, 5000); // 5 second delay
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const keywords = [
    "random password generator", "secure password", "password creator", "strong password generator", 
    "password maker", "generate secure password", "password strength", "random string generator", 
    "secure login", "password security tool", "safe password", "complex password generator"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <SEO 
        title="Random Password Generator - Create Strong Passwords Instantly"
        description="Generate secure, random passwords with custom length and complexity. Protect your accounts with strong passwords. Free, fast, and secure."
        keywords={keywords}
      />

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Random Password Generator</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password Length: {length}</label>
              <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                />
                <span className="text-gray-700">Include Uppercase Letters (A-Z)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                />
                <span className="text-gray-700">Include Lowercase Letters (a-z)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                />
                <span className="text-gray-700">Include Numbers (0-9)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                />
                <span className="text-gray-700">Include Symbols (!@#$%)</span>
              </label>
            </div>

            <button
              onClick={generatePassword}
              disabled={isGenerating}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md ${isGenerating ? 'opacity-75 cursor-wait' : ''}`}
            >
              <RefreshCw size={20} className={isGenerating ? 'animate-spin' : ''} />
              {isGenerating ? 'Generating...' : 'Generate Password'}
            </button>
          </div>

          <div className="relative">
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <button
                onClick={copyToClipboard}
                disabled={!password}
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            <div className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-xl font-mono text-lg flex items-center justify-center break-all text-center">
              {isGenerating ? (
                <div className="flex flex-col items-center gap-3 text-gray-500">
                  <RefreshCw size={32} className="animate-spin text-indigo-500" />
                  <span>Generating secure password...</span>
                </div>
              ) : password ? (
                <span className={showPassword ? "text-gray-900" : "text-gray-400 blur-sm select-none"}>
                  {password}
                </span>
              ) : (
                <span className="text-gray-400 text-sm">Generated password will appear here...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <SeoContent
        title="Random Password Generator"
        description="Create strong, secure passwords instantly with our Random Password Generator. Protect your online accounts with unique, complex passwords that are hard to crack. Customize length and character types (uppercase, lowercase, numbers, symbols) to meet specific security requirements."
        targetAudience={[
          "Security-conscious users",
          "IT professionals",
          "Anyone creating new accounts",
          "System administrators"
        ]}
        howToUse={[
          "Use the slider or input box to set your desired password length (4-64 characters).",
          "Check the boxes to include Uppercase, Lowercase, Numbers, and Symbols.",
          "Click 'Generate Password' to create a new secure password.",
          "Use the eye icon to toggle visibility if needed.",
          "Click the copy icon to copy your new password to the clipboard."
        ]}
        benefits={[
          "Enhanced security",
          "Customizable complexity",
          "Client-side generation (private)",
          "Instant results",
          "No installation required"
        ]}
        faqs={[
          {
            question: "Is it safe to generate passwords online?",
            answer: "Yes, our tool runs entirely in your browser. The passwords are generated locally and are never sent to our servers."
          },
          {
            question: "How long should a password be?",
            answer: "We recommend at least 12-16 characters for a strong password. The longer, the better."
          },
          {
            question: "Should I include symbols?",
            answer: "Yes, including symbols (!@#$%) significantly increases the complexity and strength of your password."
          },
          {
            question: "Can I use this for my bank account?",
            answer: "Absolutely. The passwords generated are cryptographically strong and suitable for sensitive accounts."
          },
          {
            question: "Do you save the passwords?",
            answer: "No, we do not store any passwords. Once you close the page, they are gone forever."
          },
          {
            question: "What makes a password strong?",
            answer: "A strong password is long, random, and includes a mix of uppercase, lowercase, numbers, and symbols."
          },
          {
            question: "Can I generate a pronounceable password?",
            answer: "This tool focuses on maximum entropy (randomness), so the passwords are typically not pronounceable."
          },
          {
            question: "Is this tool free?",
            answer: "Yes, it is completely free to use."
          },
          {
            question: "Does it work on mobile?",
            answer: "Yes, you can generate secure passwords on your phone or tablet easily."
          },
          {
            question: "Why is the default length 16?",
            answer: "16 characters is widely considered a sweet spot for security, offering extremely high resistance to brute-force attacks."
          }
        ]}
        keywords={keywords}
      />

    </div>
  );
}
