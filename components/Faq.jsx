"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How does the AI Resume Builder optimize my resume for ATS?",
    answer:
      "Our AI analyzes your resume against industry job descriptions, identifying key missing keywords, formatting errors, and section structures. It then provides targeted recommendations to ensure your resume passes Applicant Tracking Systems (ATS) seamlessly.",
  },
  {
    id: 2,
    question: "Can I download my resume in ATS-friendly PDF format?",
    answer:
      "Yes! All generated templates are 100% ATS-compliant and ready to download in high-quality PDF and editable text formats with a single click.",
  },
  {
    id: 3,
    question: "Is Resume.ai free to get started?",
    answer:
      "Yes! You can create your account, build your base resume, and run initial ATS scans for free. We also offer premium plans for unlimited AI rewrites, job-specific tailoring, and advanced template customization.",
  },
  {
    id: 4,
    question: "How is the ATS Score calculated?",
    answer:
      "The ATS Score is calculated based on keyword matching, formatting cleanliness, contact info placement, structural readability, and section ordering standard across top HR recruitment platforms like Workday, Greenhouse, and Lever.",
  },
  {
    id: 5,
    question: "Is my personal data and resume information secure?",
    answer:
      "Security and privacy are our top priorities. Your documents are stored with end-to-end encryption, and we never share or sell your personal details or resume data with third parties.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#207a75] font-semibold text-caption uppercase">
            <FaQuestionCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-h2 font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-body-reg text-slate-500 max-w-xl mx-auto">
            Everything you need to know about our AI resume builder, ATS scoring, and privacy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-teal-200 bg-teal-50/20 shadow-sm"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-h4 font-medium text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-slate-400"
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-body-reg text-slate-600 border-t border-indigo-100/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
