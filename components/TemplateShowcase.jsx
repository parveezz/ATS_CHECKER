"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const templatesData = {
  resumesPage1: [
    {
      id: "template-executive",
      styleType: "executive",
      name: "ALEXANDER HUNT",
      role: "Senior Product Strategy Lead",
      contact: "San Francisco, CA • (555) 234-5678 • alex.hunt@email.com • linkedin.com/in/alexhunt",
      summary:
        "Results-driven Product Lead with 8+ years experience scaling SaaS products from pre-revenue to $10M+ ARR. Proven track record in product roadmap execution, data analytics, and leading cross-functional teams.",
      skills: ["Product Strategy", "SaaS Metrics", "Agile & Scrum", "User Research", "SQL & Analytics", "A/B Testing"],
      education: "B.S. Business Administration — UC Berkeley (2016)",
      experience: [
        {
          title: "Lead Product Manager",
          company: "Stripe • 2022 - Present",
          bullets: [
            "Led team of 12 engineers & designers to launch enterprise billing feature, generating $3.2M ARR in Year 1.",
            "Increased user retention by 28% through AI-driven onboarding funnel optimization.",
          ],
        },
        {
          title: "Senior Product Manager",
          company: "Uber • 2019 - 2022",
          bullets: [
            "Spearheaded driver onboarding initiative across 15 global markets, reducing registration drop-off by 34%.",
          ],
        },
      ],
    },
    {
      id: "template-creative-tech",
      styleType: "creative",
      name: "SOPHIA MARTINEZ",
      role: "Full Stack AI Engineer",
      contact: "New York, NY • (555) 876-5432 • sophia.m@tech.io • github.com/sophiam",
      summary:
        "Full-stack AI developer specializing in Next.js, LLM fine-tuning, and scalable cloud architectures. Built 10+ production web applications serving 100k+ monthly active users.",
      skills: ["React / Next.js", "Python", "PyTorch", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
      education: "M.S. Computer Science — Stanford University (2020)",
      experience: [
        {
          title: "Staff Software Engineer",
          company: "Vercel • 2023 - Present",
          bullets: [
            "Engineered real-time streaming AI completion engine reducing end-to-end latency by 45%.",
            "Architected serverless database integration for 50k active developer instances.",
          ],
        },
        {
          title: "Frontend Engineer",
          company: "Linear • 2021 - 2023",
          bullets: [
            "Designed high-performance keyboard-first task manager UI handling 10,000+ simultaneous DOM updates.",
          ],
        },
      ],
    },
    {
      id: "template-minimal-slate",
      styleType: "minimal",
      name: "DANIEL PARK",
      role: "Lead Product Designer",
      contact: "Seattle, WA • (555) 345-6789 • daniel.park@design.co • portfolio.danielpark.io",
      summary:
        "Human-centered UI/UX designer crafting intuitive digital experiences for web and mobile. Passionate about design systems, accessibility, and micro-interactions.",
      skills: ["Figma", "Design Systems", "User Testing", "Prototyping", "HTML/CSS", "WCAG"],
      education: "B.F.A. Interaction Design — RISD (2018)",
      experience: [
        {
          title: "Principal UX Designer",
          company: "Airbnb • 2021 - Present",
          bullets: [
            "Redesigned core search & filter booking experience across iOS and Web, increasing conversion by 18%.",
            "Created scalable multi-brand design system containing 150+ components adopted by 150+ designers.",
          ],
        },
        {
          title: "Senior UI/UX Designer",
          company: "Figma • 2018 - 2021",
          bullets: [
            "Led design for collaborative canvas features and third-party plugin ecosystem integrations.",
          ],
        },
      ],
    },
  ],
  resumesPage2: [
    {
      id: "template-finance",
      styleType: "executive",
      name: "MARCUS VANCE",
      role: "Senior Financial Analyst",
      contact: "Chicago, IL • (555) 987-6543 • marcus.vance@finance.com",
      summary:
        "Chartered Financial Analyst (CFA) with 7+ years in corporate valuation, M&A due diligence, and quantitative modeling for Fortune 500 tech mergers.",
      skills: ["Financial Modeling", "DCF Valuation", "M&A Strategy", "Python / R", "Bloomberg Terminal"],
      education: "M.B.A. Finance — Wharton School of Business (2019)",
      experience: [
        {
          title: "Vice President - Investment Banking",
          company: "Goldman Sachs • 2021 - Present",
          bullets: [
            "Advised on $4.5B in tech M&A transactions, authoring valuation models and board presentations.",
            "Managed team of 6 analysts performing leveraged buyout (LBO) analysis.",
          ],
        },
      ],
    },
    {
      id: "template-health",
      styleType: "creative",
      name: "DR. EMILY CARTER",
      role: "Clinical Research Director",
      contact: "Boston, MA • (555) 432-1098 • dr.carter@health.org",
      summary:
        "Clinical Operations Director specializing in Phase II & III oncology trials, FDA regulatory compliance, and multi-site hospital protocol execution.",
      skills: ["Clinical Trials", "FDA Compliance", "GCP / ICH", "Biostatistics", "Oncology Research"],
      education: "M.D. / Ph.D. Oncology — Johns Hopkins Medicine (2017)",
      experience: [
        {
          title: "Director of Clinical Operations",
          company: "Pfizer • 2020 - Present",
          bullets: [
            "Overseeing 14 international trial sites with 1,200+ enrolled study participants.",
            "Accelerated FDA IND submission timeline by 3 months through automated data monitoring.",
          ],
        },
      ],
    },
    {
      id: "template-sales",
      styleType: "minimal",
      name: "JORDAN REED",
      role: "Director of Enterprise Sales",
      contact: "Austin, TX • (555) 654-3210 • jordan.reed@sales.com",
      summary:
        "High-performing SaaS Sales Executive closing $15M+ annual recurring revenue in enterprise cloud accounts across North America and EMEA.",
      skills: ["Enterprise Sales", "Meddic Framework", "Contract Negotiation", "Salesforce", "Territory Growth"],
      education: "B.A. Communication — UT Austin (2015)",
      experience: [
        {
          title: "Regional Sales Director",
          company: "Salesforce • 2021 - Present",
          bullets: [
            "Surpassed 2023 quota by 142%, closing 8 multi-million dollar Fortune 500 cloud agreements.",
            "Built and coached top-performing regional SDR/AE team of 18 professionals.",
          ],
        },
      ],
    },
  ],
};

export default function TemplateShowcase() {
  const [activeTab, setActiveTab] = useState("resumes");
  const [activeDot, setActiveDot] = useState(0);

  const activeTemplates =
    activeDot === 0 ? templatesData.resumesPage1 : templatesData.resumesPage2;

  return (
    <section className="w-full bg-[#f8fafc] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 text-center">
        {/* Top Header Section */}
        <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
          <h2 className="text-h2 font-bold text-slate-800">
            Professionally Designed Resume Templates
          </h2>
          <p className="text-body-reg text-slate-600">
            100+ free templates with dozens of different themes and formats.
          </p>
          <div className="pt-1 sm:pt-2">
            <span className="inline-block rounded-full bg-[#0d4d42] px-5 sm:px-6 py-2 sm:py-2.5 text-button font-semibold text-white shadow-sm hover:bg-[#093931] transition-colors cursor-pointer">
              Free Resume Templates
            </span>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 border-b border-slate-200/80 max-w-xs mx-auto pb-2 pt-1 sm:pt-2">
          <button
            onClick={() => setActiveTab("resumes")}
            className={`text-button font-semibold transition-all relative pb-2 cursor-pointer ${
              activeTab === "resumes"
                ? "text-slate-900"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Resumes
            {activeTab === "resumes" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("coverLetters")}
            className={`text-sm sm:text-base font-semibold transition-all relative pb-2 cursor-pointer ${
              activeTab === "coverLetters"
                ? "text-slate-900"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Cover Letters
            {activeTab === "coverLetters" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
            )}
          </button>
        </div>

        {/* Resume Templates Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
          {activeTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative bg-slate-100/80 rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col text-left overflow-hidden h-[420px] sm:h-[450px] md:h-[480px] cursor-pointer"
            >
              {/* Inner Resume Sheet with Scaled Mobile Typography */}
              <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3.5 md:p-4 space-y-2 sm:space-y-3 font-sans text-[8px] sm:text-[9px] md:text-[10px] leading-tight text-slate-800 overflow-hidden flex-1 select-none shadow-xs">
                
                {/* EXECUTIVE STYLE */}
                {template.styleType === "executive" && (
                  <div className="space-y-2 sm:space-y-2.5 h-full">
                    <div className="bg-[#207a75] text-white p-2.5 sm:p-3 rounded-lg -mx-1 -mt-1 space-y-0.5">
                      <h3 className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide uppercase">
                        {template.name}
                      </h3>
                      <p className="text-[8px] sm:text-[8.5px] md:text-[9px] text-teal-100 font-medium">
                        {template.role}
                      </p>
                      <p className="text-[7px] sm:text-[7.5px] text-teal-200/90 truncate">
                        {template.contact}
                      </p>
                    </div>

                    <p className="text-slate-600 text-[7.5px] sm:text-[8px] md:text-[8.5px] leading-snug">
                      {template.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 border-t border-slate-100">
                      <div className="col-span-1 border-r border-slate-100 pr-1 space-y-1.5">
                        <div>
                          <span className="font-bold text-[#207a75] text-[7.5px] sm:text-[8px] uppercase tracking-wider block">
                            SKILLS
                          </span>
                          <div className="space-y-0.5 text-[7px] sm:text-[7.5px] text-slate-600">
                            {template.skills?.map((sk, i) => (
                              <div key={i} className="truncate">• {sk}</div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="font-bold text-[#207a75] text-[7.5px] sm:text-[8px] uppercase tracking-wider block">
                            EDUCATION
                          </span>
                          <p className="text-[6.5px] sm:text-[7px] text-slate-600 leading-tight">
                            {template.education}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-2 space-y-1 sm:space-y-1.5">
                        <span className="font-bold text-[#207a75] text-[7.5px] sm:text-[8px] uppercase tracking-wider block">
                          EXPERIENCE
                        </span>
                        {template.experience?.map((exp, i) => (
                          <div key={i} className="space-y-0.5">
                            <div className="font-bold text-slate-900 text-[7.5px] sm:text-[8.5px]">
                              {exp.title}
                            </div>
                            <div className="text-[7px] sm:text-[7.5px] text-slate-500 font-medium">{exp.company}</div>
                            <ul className="list-disc pl-2.5 text-[7px] sm:text-[7.5px] text-slate-600 space-y-0.5">
                              {exp.bullets?.map((b, idx) => (
                                <li key={idx} className="line-clamp-2">{b}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CREATIVE TECH STYLE */}
                {template.styleType === "creative" && (
                  <div className="space-y-2 sm:space-y-2.5 h-full">
                    <div className="flex items-center gap-2 sm:gap-2.5 border-b border-emerald-100 pb-1.5 sm:pb-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center flex-shrink-0">
                        {template.name.substring(0, 2)}
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 tracking-tight truncate">
                          {template.name}
                        </h3>
                        <p className="text-[8px] sm:text-[8.5px] text-emerald-700 font-semibold truncate">
                          {template.role}
                        </p>
                        <p className="text-[7px] sm:text-[7.5px] text-slate-400 truncate">
                          {template.contact}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-[7.5px] sm:text-[8px] md:text-[8.5px] leading-snug">
                      {template.summary}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {template.skills?.map((sk, i) => (
                        <span
                          key={i}
                          className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded px-1 sm:px-1.5 py-0.5 text-[6.5px] sm:text-[7.5px] font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1 sm:space-y-1.5 pt-1 border-t border-slate-100">
                      <span className="font-bold text-emerald-700 text-[7.5px] sm:text-[8.5px] uppercase tracking-wider block">
                        EXPERIENCE HISTORY
                      </span>
                      {template.experience?.map((exp, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="font-bold text-slate-900 text-[7.5px] sm:text-[8.5px]">
                            {exp.title}
                          </div>
                          <div className="text-[7px] sm:text-[7.5px] text-emerald-600 font-medium">{exp.company}</div>
                          <ul className="list-disc pl-2.5 text-[7px] sm:text-[7.5px] text-slate-600 space-y-0.5">
                            {exp.bullets?.map((b, idx) => (
                              <li key={idx} className="line-clamp-2">{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 border-t border-slate-100 text-[7px] sm:text-[7.5px] text-slate-500 truncate">
                      <span className="font-bold text-slate-800">Education: </span>
                      {template.education}
                    </div>
                  </div>
                )}

                {/* MINIMAL SLATE STYLE */}
                {template.styleType === "minimal" && (
                  <div className="space-y-2 sm:space-y-2.5 h-full text-center sm:text-left">
                    <div className="text-center space-y-0.5 border-b-2 border-slate-900 pb-1.5 sm:pb-2">
                      <h3 className="text-xs sm:text-sm md:text-base font-serif font-bold text-slate-900 tracking-widest uppercase">
                        {template.name}
                      </h3>
                      <p className="text-[8px] sm:text-[8.5px] text-slate-700 font-medium uppercase tracking-wider">
                        {template.role}
                      </p>
                      <p className="text-[7px] sm:text-[7.5px] text-slate-400 truncate">
                        {template.contact}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-600 text-[7.5px] sm:text-[8px] md:text-[8.5px] leading-snug italic text-center">
                      &quot;{template.summary}&quot;
                    </p>

                    <div className="space-y-1.5 sm:space-y-2 pt-1 border-t border-slate-200">
                      <span className="font-serif font-bold text-slate-900 text-[7.5px] sm:text-[8.5px] uppercase tracking-widest block text-center">
                        WORK EXPERIENCE
                      </span>
                      {template.experience?.map((exp, i) => (
                        <div key={i} className="space-y-0.5 text-left">
                          <div className="font-bold text-slate-900 text-[7.5px] sm:text-[8.5px] flex justify-between">
                            <span>{exp.title}</span>
                          </div>
                          <div className="text-[7px] sm:text-[7.5px] text-slate-500 font-semibold">{exp.company}</div>
                          <ul className="list-disc pl-2.5 sm:pl-3 text-[7px] sm:text-[7.5px] text-slate-600 space-y-0.5">
                            {exp.bullets?.map((b, idx) => (
                              <li key={idx} className="line-clamp-2">{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1 border-t border-slate-200 text-[7px] sm:text-[7.5px] text-slate-600 flex justify-between">
                      <span className="truncate pr-1">{template.education}</span>
                      <span className="font-semibold text-slate-800 flex-shrink-0">🏆 Top Performer</span>
                    </div>
                  </div>
                )}

                {/* COVER LETTERS DISPLAY */}
                {!template.styleType && (
                  <div className="space-y-2">
                    <div className="border-b border-slate-200 pb-2">
                      <h3 className={`text-sm sm:text-base font-bold ${template.accentText}`}>
                        {template.name}
                      </h3>
                      <p className="text-[8px] sm:text-[9px] text-slate-400">{template.role}</p>
                      <p className="text-[7px] sm:text-[8px] text-slate-400">{template.contact}</p>
                    </div>
                    <p className="text-slate-600 text-[8px] sm:text-[9px] leading-relaxed whitespace-pre-line">
                      {template.summary}
                    </p>
                  </div>
                )}
              </div>

              {/* Hover Golden Overlay Button */}
              <div className="absolute inset-0 bg-slate-900/15 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 rounded-2xl">
                <Link
                  href="/templates"
                  className="rounded-full bg-[#eab308] hover:bg-[#d97706] text-slate-950 text-button font-bold px-6 py-3 shadow-xl flex items-center gap-2 transition-transform group-hover:scale-105"
                >
                  <span>Use this Template</span>
                  <FaChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2 sm:pt-3">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                activeDot === dot ? "bg-slate-700 w-5" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
