"use client";

import Link from "next/link";
import { FiCpu, FiAward, FiTarget, FiHeart, FiCheckCircle } from "react-icons/fi";

export default function About() {
  return (
    <div className="pt-32 pb-0 space-y-20">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/50 px-4 py-1.5 text-xs sm:text-sm font-normal tracking-wide text-indigo-700 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
              <FiCpu />
            </span>
            Powered by Gemini AI
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold tracking-wide text-slate-900 leading-tight">
            Next-Gen ATS Resume Analysis with <span className="text-indigo-600 font-normal">Gemini AI</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-base md:text-xl font-normal tracking-wide max-w-2xl mx-auto leading-relaxed">
            Resume.ai leverages Google DeepMind&apos;s advanced Gemini AI models to analyze, score, and optimize your resume against real-world job descriptions and ATS algorithms.
          </p>
        </div>

        {/* 3-Step Workflow: Create PDF -> Check ATS Score -> Download */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
              How It Works
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-wide">
              Create, Score & Download in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 text-center space-y-4 shadow-none">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                1. Create PDF Resume
              </h3>
              <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                Build your resume with our easy builder or generate a polished PDF resume tailored to your target position.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 text-center space-y-4 shadow-none">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                2. Check ATS Score
              </h3>
              <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                Run Gemini AI instant scanner to check keyword match percentages, formatting compliance, and overall ATS score out of 100.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 text-center space-y-4 shadow-none">
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                3. Instant Download
              </h3>
              <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                Download your final ATS-optimized resume directly as a high-resolution PDF or editable Word (.docx) file ready for job applications.
              </p>
            </div>
          </div>
        </div>

        {/* Gemini AI Core Feature Breakdown */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-none space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
              Deep Gemini AI Integration
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-wide">
              How Gemini AI powers your resume success
            </h2>
            <p className="text-slate-500 text-base font-normal tracking-wide leading-relaxed">
              Our platform connects directly to Gemini AI API endpoints to perform multi-layered natural language processing on your credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg">
                <FiTarget />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                  ATS Keyword & Skill Matching
                </h3>
                <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                  Gemini AI compares your resume line-by-line against target job postings, identifying missing hard skills, industry keywords, and critical experience tags required by Applicant Tracking Systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg">
                <FiCpu />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                  Contextual Content Optimization
                </h3>
                <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                  Using Gemini AI&apos;s advanced semantic understanding, our builder rewrites passive bullet points into action-oriented statements backed by quantifiable metrics and industry achievements.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg">
                <FiAward />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                  Real-time Score Calculation
                </h3>
                <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                  Get an instant ATS Compatibility Score out of 100 based on formatting cleanliness, keyword density, section organization, and readability metrics.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg">
                <FiCheckCircle />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-slate-900 tracking-wide">
                  Tailored Cover Letter Generation
                </h3>
                <p className="text-slate-500 text-sm font-normal tracking-wide leading-relaxed">
                  Gemini AI synthesizes your unique career timeline with target job requirements to generate tailored, compelling cover letters in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 space-y-4 shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl">
              <FiTarget />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-slate-900">ATS Precision</h3>
            <p className="text-slate-500 text-base font-normal tracking-wide leading-relaxed">
              Engineered to pass screening filters used by Fortune 500 recruiters and HR software.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 space-y-4 shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl">
              <FiAward />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-slate-900">Professional Quality</h3>
            <p className="text-slate-500 text-base font-normal tracking-wide leading-relaxed">
              Curated designs optimized for both robotic ATS scanners and human recruiters.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 space-y-4 shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl">
              <FiHeart />
            </div>
            <h3 className="text-2xl font-semibold tracking-wide text-slate-900">Candidate First</h3>
            <p className="text-slate-500 text-base font-normal tracking-wide leading-relaxed">
              Intuitive, accessible tools empowering job seekers at every stage of their career journey.
            </p>
          </div>
        </div>
      </div>

      {/* Experience CTA Banner */}
      <div className="w-full bg-slate-100/80 border border-slate-200/80 text-slate-900 py-16 px-6 sm:px-12 text-center space-y-6 rounded-3xl my-12 shadow-sm">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-wide text-slate-900">
            Experience Gemini AI Resume Scoring
          </h2>
          <p className="text-slate-600 text-lg font-normal tracking-wide max-w-xl mx-auto">
            Join thousands of professionals who improved their interview callbacks using Gemini AI ATS analysis.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/register"
              className="rounded-full bg-indigo-600 px-9 py-3.5 text-lg font-normal tracking-wide text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
