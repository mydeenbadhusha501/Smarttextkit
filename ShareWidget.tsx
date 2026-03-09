import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Link as LinkIcon, Twitter, Facebook, Linkedin, Mail, X, Check, MessageCircle } from 'lucide-react';

export default function ShareWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const title = typeof document !== 'undefined' ? document.title : 'SmartTextKit';

  const shareLinks = [
    {
      name: 'Copy Link',
      icon: copied ? Check : LinkIcon,
      color: 'bg-gray-700',
      action: () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-[#1DA1F2]',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#4267B2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0077b5]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-[#25D366]',
      href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    },
    {
        name: 'Email',
        icon: Mail,
        color: 'bg-red-500',
        href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col gap-3 mb-2 items-end">
              {shareLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                      if (link.action) {
                          e.preventDefault();
                          link.action();
                      }
                  }}
                  target={link.href ? "_blank" : undefined}
                  rel={link.href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: (shareLinks.length - 1 - index) * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-full shadow-lg text-white font-medium text-sm hover:scale-105 transition-transform ${link.color} cursor-pointer w-max`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-xl text-white transition-all duration-300 ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/30'}`}
        >
          {isOpen ? <X size={24} /> : <Share2 size={24} />}
        </motion.button>
      </div>
    </div>
  );
}
