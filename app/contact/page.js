"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { getApiUrl } from "@/lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("Could not connect to server. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-0 space-y-20">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
                How can we help you today?
              </h1>
              <p className="text-slate-500 text-xs sm:text-base md:text-xl font-normal tracking-wide leading-relaxed">
                Our dedicated customer support team is just a message or call away.
              </p>
            </div>

          <div className="space-y-6 pt-2">
            {/* Email item */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-normal tracking-wide text-slate-500">Email:</p>
                <p className="text-base font-normal tracking-wide text-slate-900">support@resume.ai</p>
              </div>
            </div>

            {/* Phone item */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-normal tracking-wide text-slate-500">Phone:</p>
                <p className="text-base font-normal tracking-wide text-slate-900">+1 (800) 555-0199</p>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-normal tracking-wide text-slate-500">Location:</p>
                <p className="text-base font-normal tracking-wide text-slate-900">Silicon Valley, CA 94043 United States</p>
              </div>
            </div>
          </div>

          {/* Additional Info Widget: Office Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-normal tracking-wide text-slate-900 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Support Hours
            </h3>
            <div className="text-sm text-slate-600 space-y-1 font-normal tracking-wide">
              <div className="flex justify-between">
                <span>Monday – Friday:</span>
                <span className="font-normal tracking-wide text-slate-800">9:00 AM – 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday – Sunday:</span>
                <span className="font-normal tracking-wide text-slate-800">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Name<span className="text-indigo-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Work email<span className="text-indigo-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane.doe@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Subject<span className="text-indigo-600">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="General Inquiry"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Message<span className="text-indigo-600">*</span>
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I would like to inquire about your services."
                  className="w-full rounded-xl border border-indigo-400 bg-white px-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-indigo-600 px-9 py-3.5 text-lg font-normal tracking-wide text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 transition-all disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      </div>

      {/* Bottom CTA Banner (Full Width) */}
      <div className="w-full bg-slate-900 text-white py-12 px-6 sm:px-12 text-center space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-normal tracking-wide leading-snug">
            Ready to supercharge your resume with AI?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal tracking-wide max-w-xl mx-auto">
            Join thousands of job seekers creating ATS-optimized resumes in minutes.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/register"
              className="rounded-full bg-indigo-600 px-7 py-3 text-base font-normal tracking-wide text-white shadow-md hover:bg-indigo-700 transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-slate-700 bg-slate-800 px-7 py-3 text-base font-normal tracking-wide text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
