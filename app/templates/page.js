"use client";

import { useState } from "react";
import Link from "next/link";
import { FiLayout, FiCheck, FiDownload, FiStar, FiFilter } from "react-icons/fi";

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Modern", "Professional", "Creative", "Minimalist"];

  const templates = [
    {
      id: 1,
      name: "Modern Executive",
      category: "Modern",
      badge: "Popular",
      rating: "4.9",
      downloads: "12.4k",
      description: "Sleek two-column layout optimized for technology, software engineering, and product roles.",
      color: "from-[#207a75] to-teal-800",
    },
    {
      id: 2,
      name: "Corporate Standard",
      category: "Professional",
      badge: "ATS Rank 99%",
      rating: "5.0",
      downloads: "28.1k",
      description: "Clean single-column structure preferred by Fortune 500 hiring managers and finance executives.",
      color: "from-slate-700 to-slate-900",
    },
    {
      id: 3,
      name: "Creative Portfolio",
      category: "Creative",
      badge: "New",
      rating: "4.8",
      downloads: "8.9k",
      description: "Vibrant accent headers designed for UI/UX designers, marketers, and creative directors.",
      color: "from-teal-600 to-[#165a56]",
    },
    {
      id: 4,
      name: "Minimalist Clean",
      category: "Minimalist",
      badge: "Fast Scan",
      rating: "4.9",
      downloads: "15.3k",
      description: "Ultra-clean spacing and crisp typography engineered for seamless parsing by all major ATS platforms.",
      color: "from-slate-800 to-emerald-950",
    },
    {
      id: 5,
      name: "Tech Specialist",
      category: "Modern",
      badge: "Top Rated",
      rating: "5.0",
      downloads: "31.2k",
      description: "Dedicated skills grid and project accomplishment metrics built specifically for tech leads.",
      color: "from-[#1b5e59] to-cyan-900",
    },
    {
      id: 6,
      name: "Executive Leader",
      category: "Professional",
      badge: "Executive",
      rating: "4.9",
      downloads: "19.7k",
      description: "Sophisticated executive summary layout designed for VP, C-Suite, and Senior Director candidates.",
      color: "from-slate-900 to-teal-900",
    },
  ];

  const filteredTemplates = selectedCategory === "All"
    ? templates
    : templates.filter((t) => t.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-caption font-medium tracking-wide text-slate-800 shadow-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#207a75] text-white text-xs">
            <FiLayout />
          </span>
          Resume Templates
        </span>
        <h1 className="text-h1 font-semibold text-slate-900">
          ATS-Optimized <span className="text-[#207a75] font-normal">Resume Templates</span>
        </h1>
        <p className="text-slate-500 text-body-lg font-normal max-w-2xl mx-auto">
          Select from recruiter-approved, ATS-friendly templates engineered to get your resume noticed by top employers.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-5 py-2 text-button font-medium transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-[#207a75] text-white shadow-md font-semibold"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            {/* Mockup Preview Area */}
            <div className={`h-48 w-full bg-gradient-to-br ${template.color} p-6 flex flex-col justify-between text-white relative`}>
              <div className="flex items-center justify-between z-10">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-caption font-semibold text-white border border-white/30">
                  {template.badge}
                </span>
                <span className="flex items-center gap-1 text-caption bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <FiStar className="text-amber-300 fill-amber-300 w-3.5 h-3.5" />
                  {template.rating}
                </span>
              </div>

              <div className="z-10 space-y-1">
                <span className="text-caption text-teal-200 uppercase tracking-widest font-semibold block">
                  {template.category}
                </span>
                <h3 className="text-h3 font-bold text-white tracking-wide">
                  {template.name}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-body-sm text-slate-600">
                {template.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-caption text-slate-400 flex items-center gap-1">
                  <FiDownload className="w-3.5 h-3.5 text-[#207a75]" />
                  {template.downloads} downloads
                </span>

                <Link
                  href="/auth/register"
                  className="rounded-full bg-[#207a75] hover:bg-[#165a56] text-white px-5 py-2 text-button font-bold shadow-sm transition-all group-hover:scale-105"
                >
                  Use Template
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
