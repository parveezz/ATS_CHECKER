"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiMail, FiKey, FiLock, FiCheckCircle } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        router.push(`/auth/verify-otp?email=${encodeURIComponent(email)}`);
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
    <div className="pt-24 sm:pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto min-h-[calc(100vh-18rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-caption font-medium tracking-wide text-slate-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#207a75] text-white text-xs">
                <FiKey />
              </span>
              Account Recovery
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-h1 font-semibold text-slate-900 leading-tight">
              Trouble signing <span className="text-[#207a75] font-normal">in?</span>
            </h1>
            <p className="text-slate-500 text-body-lg font-normal leading-relaxed">
              Don&apos;t worry! Enter your registered email address and we&apos;ll send you a 6-digit OTP to reset your password.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            <div className="flex items-center gap-3 text-slate-700 text-body-reg font-normal">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-[#207a75]">
                <FiCheckCircle className="w-4 h-4" />
              </div>
              Instant verification code sent to inbox
            </div>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7 max-w-md w-full mx-auto">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-h2 font-semibold text-slate-900">
                Forgot Password
              </h2>
              <p className="text-body-sm text-slate-500">
                Enter your email address to receive reset instructions
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-label text-slate-800 mb-1.5">
                  Email Address<span className="text-[#207a75]">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-full border border-slate-300 pl-11 pr-5 py-3 text-input text-slate-900 placeholder:text-slate-400 focus:border-[#207a75] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#207a75] hover:bg-[#165a56] py-3.5 text-button font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? "Sending OTP..." : "Send Verification Code"}</span>
              </button>
            </form>

            <div className="text-center pt-2 border-t border-slate-100">
              <Link
                href="/auth/login"
                className="text-body-sm text-[#207a75] hover:underline font-semibold"
              >
                ← Back to Sign In
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
