"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaTimes, FaShieldAlt } from "react-icons/fa";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-16 right-4 sm:right-6 z-50 w-[75vw] sm:w-[75%] max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-200/90 select-none space-y-4"
        >
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 flex-shrink-0">
                <FaCookieBite className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-h4 font-bold text-slate-900 leading-tight">
                  Cookie & Privacy Preferences
                </h3>
                <span className="text-caption text-[#207a75] font-medium flex items-center gap-1">
                  <FaShieldAlt className="w-2.5 h-2.5 inline" />
                  Your data is protected & encrypted
                </span>
              </div>
            </div>

            <button
              onClick={handleDecline}
              aria-label="Close"
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Description Text */}
          <p className="text-body-sm text-slate-600">
            We use cookies and intelligent analytics to improve your experience, tailor ATS resume optimization recommendations, and analyze platform performance.
          </p>

          {/* Buttons Row (Decline & Accept) */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              onClick={handleDecline}
              className="px-5 py-2 text-button font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer active:scale-95"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-button font-semibold text-white bg-[#207a75] hover:bg-[#165a56] rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
            >
              Accept
            </button>
          </div>

          {/* Text Below the Buttons */}
          <p className="text-caption text-slate-400 text-right pt-2 border-t border-slate-100">
            By clicking Accept, you consent to our use of cookies per our Privacy Policy & Terms.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
