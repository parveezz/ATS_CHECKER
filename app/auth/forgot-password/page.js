"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiMail, FiKey, FiLock, FiCheckCircle } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(getApiUrl("/api/auth/forgot-password"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "OTP sent successfully! Check your email.");
        window.location.href = `/verify-otp?email=${encodeURIComponent(email)}`;
      } else {
        toast.error(data.message || "User not found or request failed.");
      }
    } catch (err) {
      toast.error("Could not connect to server. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-[calc(100vh-18rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                <FiKey />
              </span>
              Account Recovery
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
              Trouble signing <span className="text-indigo-600 font-normal">in?</span>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl font-normal tracking-wide leading-relaxed">
              Don't worry! Enter your registered email address and we'll send you a 6-digit OTP to reset your password.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            <div className="flex items-center gap-3 text-slate-700 text-base font-normal tracking-wide">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <FiCheckCircle className="w-4 h-4" />
              </div>
              Instant verification code sent to inbox
            </div>
            <div className="flex items-center gap-3 text-slate-700 text-base font-normal tracking-wide">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <FiLock className="w-4 h-4" />
              </div>
              Secure end-to-end password encryption
            </div>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 sm:p-10 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold tracking-wide text-slate-900">
                Forgot Password
              </h2>
              <p className="text-sm font-normal tracking-wide text-slate-500">
                Enter your email address to receive verification code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Email address<span className="text-indigo-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <FiMail className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-slate-900 px-9 py-3.5 text-lg font-normal tracking-wide text-white shadow-md hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
                <Link
                  href="/auth/login"
                  className="text-sm font-normal tracking-wide text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Remembered password? <span className="text-indigo-600 font-semibold">Sign in</span>
                </Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
