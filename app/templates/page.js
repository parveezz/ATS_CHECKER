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
      color: "from-indigo-500 to-sky-600",
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
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      name: "Minimalist Clean",
      category: "Minimalist",
      badge: "ATS Rank 98%",
      rating: "4.9",
      downloads: "15.3k",
      description: "Ultra-clean typography layout with high whitespace readability for entry to senior roles.",
      color: "from-emerald-600 to-teal-700",
    },
    {
      id: 5,
      name: "Tech Specialist",
      category: "Modern",
      badge: "AI Tuned",
      rating: "4.9",
      downloads: "19.7k",
      description: "Highlighted skill chips and project section layout tailored for developers and data scientists.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 6,
      name: "Leadership Pro",
      category: "Professional",
      badge: "Top Rated",
      rating: "5.0",
      downloads: "22.5k",
      description: "Strong executive summary header and metric achievement highlights for management roles.",
      color: "from-slate-800 to-indigo-950",
    },
  ];

  const filteredTemplates = selectedCategory === "All"
    ? templates
    : templates.filter((t) => t.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
            <FiLayout />
          </span>
          Resume Templates
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-wide text-slate-900 leading-tight">
          ATS-Optimized <span className="text-indigo-600 font-normal">Resume Templates</span>
        </h1>
        <p className="text-slate-500 text-lg sm:text-xl font-normal tracking-wide max-w-2xl mx-auto leading-relaxed">
          Select from recruiter-approved, ATS-friendly templates engineered to get your resume noticed by top employers.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-6 py-2.5 text-base font-normal tracking-wide transition-all ${
              selectedCategory === cat
                ? "bg-slate-900 text-white shadow-md"
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
            className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-none hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            {/* Mockup Preview Area */}
            <div className={`h-52 w-full bg-gradient-to-br ${template.color} p-6 flex flex-col justify-between text-white relative`}>
              <div className="flex items-center justify-between z-10">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold tracking-wide text-white border border-white/30">
                  {template.badge}
                </span>
                <span className="flex items-center gap-1 text-xs font-normal tracking-wide bg-black/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <FiStar className="text-amber-300 fill-amber-300 w-3.5 h-3.5" />
                  {template.rating}
                </span>
              </div>

              {/* Minimal Resume Sheet Mockup Graphic */}
              <div className="bg-white/95 rounded-xl p-4 text-slate-800 space-y-2 shadow-xl border border-white/50 group-hover:scale-[1.02] transition-transform">
                <div className="h-3 w-28 bg-slate-800 rounded" />
                <div className="h-2 w-44 bg-slate-300 rounded" />
                <div className="border-t border-slate-200 my-1 pt-1.5 space-y-1">
                  <div className="h-2 w-full bg-slate-200 rounded" />
                  <div className="h-2 w-4/5 bg-slate-200 rounded" />
                </div>
              </div>
            </div>

            {/* Template Info Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold tracking-wide text-slate-900">
                    {template.name}
                  </h3>
                  <span className="text-xs font-normal tracking-wide text-slate-400 flex items-center gap-1">
                    <FiDownload className="w-3.5 h-3.5" />
                    {template.downloads}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                  {template.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/auth/login"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 py-3 text-base font-normal tracking-wide text-white shadow-md hover:bg-indigo-700 transition-all"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Templates Grid End */}
    </div>
  );
}
