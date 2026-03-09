import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "p-2 rounded-lg transition-all duration-200 flex items-center gap-2",
        copied 
          ? "text-green-600 bg-green-50 hover:bg-green-100" 
          : "text-gray-500 hover:text-indigo-600 hover:bg-indigo-50",
        className
      )}
      title="Copy to Clipboard"
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
      {copied && <span className="text-xs font-medium">Copied!</span>}
    </button>
  );
}
