import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Sparkles, Zap, Shield, Star } from 'lucide-react';
import { toolCategories } from '../config/tools';

// Static system updates
const systemUpdates = [
  {
    id: 'sys-1',
    text: "Privacy First: All tools run 100% in your browser.",
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-50"
  }
];

export function NotificationBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dynamically generate updates from tools
  const updates = useMemo(() => {
    // Flatten all tools
    const allTools = toolCategories.flatMap(cat => cat.tools);
    
    // Get the last 5 tools (assuming they are the newest)
    // or pick random ones. Let's pick the last 4 added.
    const recentTools = allTools.slice(-4).reverse();

    const toolUpdates = recentTools.map((tool, idx) => ({
      id: `tool-${idx}`,
      text: `New: ${tool.name} - ${tool.desc}`,
      icon: idx % 2 === 0 ? Sparkles : Zap,
      color: idx % 2 === 0 ? "text-blue-600" : "text-purple-600",
      bg: idx % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
    }));

    return [...toolUpdates, ...systemUpdates];
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [updates.length]);

  const currentUpdate = updates[currentIndex];

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative overflow-hidden bg-white rounded-full shadow-sm border border-gray-100 p-1.5 pr-6 flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentUpdate.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 w-full"
          >
            <div className={`p-2 rounded-full ${currentUpdate.bg} ${currentUpdate.color} shrink-0`}>
              <currentUpdate.icon size={16} />
            </div>
            <span className="text-sm font-medium text-gray-700 truncate">
              {currentUpdate.text}
            </span>
          </motion.div>
        </AnimatePresence>
        
        {/* Progress indicators */}
        <div className="absolute right-4 flex gap-1">
          {updates.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-indigo-500' : 'w-1.5 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
