import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookie is already accepted
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9999] w-full bg-[#222] text-white p-5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] rounded-t-2xl flex flex-col gap-4 items-center text-center sm:bottom-6 sm:w-[500px] sm:mx-auto sm:rounded-2xl sm:flex-row sm:text-left sm:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          id="cookie-banner"
        >
          <p className="flex-1 text-sm leading-relaxed text-gray-200">
            This website uses cookies to improve your experience and show relevant ads.
          </p>
          <button
            id="accept-cookie"
            onClick={handleAccept}
            className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2.5 rounded-xl font-semibold transition-all active:scale-95 shadow-md whitespace-nowrap"
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
