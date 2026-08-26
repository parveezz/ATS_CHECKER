"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    rating: 5,
    title: "Worth The Buck",
    comment:
      "Super helpful, and simple to use. Definitely worth the price for the quantity and quality of services for resume and job...",
    author: "Priscilla",
    timeAgo: "about 17 hours ago",
  },
  {
    id: 2,
    rating: 5,
    title: "A Resume I'm Finally Co...",
    comment:
      "I can't remember the last time I felt so confident about my resume. I have so much support, not only from AI...",
    author: "Meagan Rodriguez",
    timeAgo: "3 days ago",
  },
  {
    id: 3,
    rating: 4,
    title: "It's good",
    comment:
      "It's good, but there are some difficulties in modifying the document's language.",
    author: "Wilson Teixeira",
    timeAgo: "3 days ago",
  },
  {
    id: 4,
    rating: 5,
    title: "Landed 3 Interviews in a Week!",
    comment:
      "The ATS check gave me instant feedback on missing keywords. Revised my resume and started getting recruiter responses immediately.",
    author: "David Chen",
    timeAgo: "4 days ago",
  },
  {
    id: 5,
    rating: 5,
    title: "Saves so much time!",
    comment:
      "Instead of tweaking my resume manually for every single job application, the AI tailored it in under two minutes.",
    author: "Sarah Jenkins",
    timeAgo: "5 days ago",
  },
  {
    id: 6,
    rating: 4,
    title: "Great template selection",
    comment:
      "Clean layout designs that passed every applicant tracking system test I ran it through. Very satisfied!",
    author: "Marcus Vance",
    timeAgo: "1 week ago",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0.85,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0.85,
  }),
};

export default function Testimonials() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const cardsPerPage = 3;
  const maxIndex = Math.max(0, reviewsData.length - cardsPerPage);
  const totalSteps = maxIndex + 1;

  const handlePrev = () => {
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    setPage([nextIndex, -1]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    setPage([nextIndex, 1]);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FaStar key={i} className="w-4 h-4 text-emerald-500 inline" />
        );
      } else {
        stars.push(
          <FaStar key={i} className="w-4 h-4 text-slate-300 inline" />
        );
      }
    }
    return stars;
  };

  const visibleReviews = reviewsData.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <section className="w-full bg-slate-50/60 pt-0 pb-12 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Header with Section Heading */}
        <div className="text-center space-y-2 mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 text-[#207a75] font-semibold text-caption uppercase">
            <FaQuoteLeft className="w-3.5 h-3.5" />
            <span>Testimonials & Reviews</span>
          </div>
          <h2 className="text-h2 font-semibold text-slate-800">
            92% of customers recommend us
          </h2>
        </div>

        {/* Grid Container matching original exact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Summary Box */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left pr-0 lg:pr-4">
            <h3 className="text-h3 font-semibold text-slate-900 mb-1.5 sm:mb-2">
              4.2 out of 5
            </h3>
            
            {/* Overall Rating Stars */}
            <div className="flex items-center gap-1 mb-3">
              <FaStar className="w-5 h-5 text-emerald-500" />
              <FaStar className="w-5 h-5 text-emerald-500" />
              <FaStar className="w-5 h-5 text-emerald-500" />
              <FaStar className="w-5 h-5 text-emerald-500" />
              <FaStarHalfAlt className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Trustpilot Brand */}
            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base mb-1">
              <FaStar className="w-4 h-4 text-emerald-500 inline" />
              <span>Trustpilot</span>
            </div>

            <p className="text-caption text-slate-500 font-normal">
              based on 56,029 reviews
            </p>
          </div>

          {/* Right Reviews Grid Container */}
          <div className="lg:col-span-9 space-y-6">
            <div className="relative min-h-[175px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 350, damping: 32 },
                    opacity: { duration: 0.15 },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                >
                  {visibleReviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="space-y-2.5">
                        {/* Rating stars */}
                        <div className="flex gap-1">
                          {renderStars(review.rating)}
                        </div>

                        {/* Review Title */}
                        <h4 className="font-semibold text-slate-900 text-sm line-clamp-1">
                          {review.title}
                        </h4>

                        {/* Comment text */}
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                          {review.comment}
                        </p>
                      </div>

                      {/* Author & date */}
                      <div className="pt-3 text-[11px] text-slate-400 font-normal border-t border-slate-100 mt-3">
                        <span>{review.author}</span>
                        <span className="mx-1">•</span>
                        <span>{review.timeAgo}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls (Nav Arrows & Sliding Handle) */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-white shadow-sm hover:shadow border border-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer hover:bg-slate-50 active:scale-95"
                >
                  <FaChevronLeft className="w-3 h-3" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-white shadow-sm hover:shadow border border-slate-200 text-slate-600 flex items-center justify-center transition-all cursor-pointer hover:bg-slate-50 active:scale-95"
                >
                  <FaChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Fixed Sliding Indicator Track */}
              <div className="flex-1 bg-slate-200/80 h-1 rounded-full relative overflow-hidden">
                <motion.div
                  className="bg-sky-500 h-full rounded-full absolute top-0"
                  style={{
                    width: `${100 / totalSteps}%`,
                  }}
                  animate={{
                    x: `${currentIndex * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
