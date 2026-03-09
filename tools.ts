import { 
  FileText, AlignLeft, Type, Scissors, Hash, Image as ImageIcon, ArrowRight,
  ArrowLeftRight, Trash2, ArrowDownAZ, RefreshCw, List, Zap, Shield, Globe, User, Lock,
  PenTool, BookOpen, GraduationCap, Quote, FileEdit, CheckSquare, Calendar, Clock, Calculator, Percent, Tag, Maximize
} from 'lucide-react';

export const toolCategories = [
  {
    name: "Text Analysis & Counting",
    tools: [
      { name: 'Word Counter', href: '/word-counter', icon: FileText, desc: 'Count words, characters, and paragraphs.' },
      { name: 'Character Counter', href: '/character-counter', icon: AlignLeft, desc: 'Count characters with and without spaces.' },
      { name: 'Sentence Counter', href: '/sentence-counter', icon: Type, desc: 'Count sentences in your text.' },
      { name: 'Paragraph Counter', href: '/paragraph-counter', icon: AlignLeft, desc: 'Count paragraphs in your text.' },
      { name: 'Reading Time Calculator', href: '/reading-time-calculator', icon: Clock, desc: 'Estimate reading time for your text.' },
      { name: 'Diff Checker', href: '/diff-checker', icon: ArrowLeftRight, desc: 'Compare two texts and see differences.' },
    ]
  },
  {
    name: "Text Manipulation",
    tools: [
      { name: 'Text Case Converter', href: '/case-converter', icon: Type, desc: 'Convert text to uppercase, lowercase, title case, etc.' },
      { name: 'Text Reverser', href: '/text-reverser', icon: ArrowLeftRight, desc: 'Reverse text or words.' },
      { name: 'Capitalize First Letter', href: '/capitalize-first-letter', icon: Type, desc: 'Capitalize the first letter of every word.' },
      { name: 'Bullet Generator', href: '/bullet-point-generator', icon: List, desc: 'Add bullet points to lists instantly.' },
      { name: 'Alphabetical Sorter', href: '/alphabetical-sorter', icon: ArrowDownAZ, desc: 'Sort lists A-Z, Z-A, or numerically.' },
    ]
  },
  {
    name: "Image Tools",
    tools: [
      { name: 'Image Compressor', href: '/image-compressor', icon: ImageIcon, desc: 'Compress and resize images locally.' },
      { name: 'Image Converter', href: '/image-format-converter', icon: RefreshCw, desc: 'Convert between PNG, JPG, and WEBP.' },
      { name: 'Image Upscaler', href: '/image-upscale-tool', icon: Maximize, desc: 'Upscale images up to 32x.' },
      { name: 'Aspect Ratio Calculator', href: '/aspect-ratio-calculator', icon: ArrowLeftRight, desc: 'Calculate image aspect ratios.' },
      { name: 'Favicon Generator', href: '/favicon-generator-tool', icon: ImageIcon, desc: 'Generate favicons in multiple sizes.' },
    ]
  },
  {
    name: "Calculators",
    tools: [
      { name: 'Simple Calculator', href: '/simple-calculator', icon: Calculator, desc: 'Basic calculator for everyday math.' },
      { name: 'Percentage Calculator', href: '/percentage-calculator', icon: Percent, desc: 'Calculate percentages easily.' },
      { name: 'Age Calculator', href: '/online-age-calculator', icon: Calendar, desc: 'Calculate age in years, months, and days.' },
      { name: 'Discount Calculator', href: '/discount-calculator', icon: Tag, desc: 'Calculate final price after discount.' },
      { name: 'Square Root Calculator', href: '/square-root-calculator', icon: Calculator, desc: 'Find the square root of a number.' },
    ]
  },
  {
    name: "Generators",
    tools: [
      { name: 'Random Number Generator', href: '/number-generator', icon: Hash, desc: 'Generate random numbers within a range.' },
      { name: 'Random Password Generator', href: '/password-generator', icon: Lock, desc: 'Create strong, secure passwords instantly.' },
    ]
  },
  {
    name: "Utilities",
    tools: [
      { name: 'Online Notepad', href: '/online-notepad', icon: FileText, desc: 'Simple online notepad with auto-save.' },
    ]
  }
];
