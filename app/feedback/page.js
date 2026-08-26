"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FiSend, FiMessageSquare } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

export default function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  const handleChange = (e) => {
    setFeedbackData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedbackLoading(true);

    try {
      const response = await fetch(getApiUrl("/api/feedback"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Thank you for your feedback!");
        setFeedbackData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to submit feedback.");
      }
    } catch (err) {
      toast.error("Could not connect to server. Please try again.");
    } finally {
      setFeedbackLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                <FiMessageSquare />
              </span>
              User Feedback
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
              We value your <span className="text-indigo-600 font-normal">feedback</span>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl font-normal tracking-wide leading-relaxed">
              Help us improve Resume.ai! Tell us about your experience, report issues, or suggest new features you would love to see.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            <div className="flex items-center gap-3 text-slate-700 text-base font-normal tracking-wide">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                ✓
              </div>
              Direct responses from product engineers
            </div>
            <div className="flex items-center gap-3 text-slate-700 text-base font-normal tracking-wide">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                ✓
              </div>
              Continuous feature updates & improvements
            </div>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7 max-w-lg w-full mx-auto">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-none space-y-5">
            
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-semibold tracking-wide text-slate-900">
                Send Feedback
              </h2>
              <p className="text-sm font-normal tracking-wide text-slate-500">
                Share your suggestions or report any issues
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-1.5">
                  Your Name<span className="text-indigo-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={feedbackData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-1.5">
                  Email Address<span className="text-indigo-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={feedbackData.email}
                  onChange={handleChange}
                  placeholder="jane.doe@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-1.5">
                  Feedback Message<span className="text-indigo-600">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={feedbackData.message}
                  onChange={handleChange}
                  placeholder="Great platform! I would love to see more resume templates..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={feedbackLoading}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-indigo-600 py-3.5 text-lg font-normal tracking-wide text-white shadow-md hover:bg-indigo-700 transition-all disabled:opacity-50"
                >
                  <FiSend className="w-4 h-4" />
                  {feedbackLoading ? "Submitting..." : "Submit Feedback"}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
