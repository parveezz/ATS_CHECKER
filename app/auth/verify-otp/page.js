"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiShield } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

function VerifyOtpContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailParam);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (emailParam) setEmail(emailParam);
  }, [emailParam]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    // Only accept numeric inputs
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value.slice(-1); // Take last entered char
    setOtpValues(newOtp);

    // Auto-advance focus to next input box
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move focus back on Backspace if current field is empty
    if (e.key === "Backspace" && !otpValues[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, 6).split("");
    const newOtp = [...otpValues];
    digits.forEach((digit, idx) => {
      newOtp[idx] = digit;
    });
    setOtpValues(newOtp);

    const focusIdx = Math.min(digits.length, 5);
    if (inputRefs.current[focusIdx]) {
      inputRefs.current[focusIdx].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otpValues.join("");

    if (fullOtp.length < 6) {
      toast.error("Please enter the complete 6-digit OTP code.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(getApiUrl("/api/auth/verify-otp"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: fullOtp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "OTP verified successfully!");
        const resetToken = data.resetToken || "";
        window.location.href = `/reset-password?resetToken=${encodeURIComponent(resetToken)}&token=${encodeURIComponent(resetToken)}`;
      } else {
        toast.error(data.message || "Invalid or expired OTP.");
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
                <FiShield />
              </span>
              Security Verification
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
              Enter your <span className="text-indigo-600 font-normal">OTP code</span>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl font-normal tracking-wide leading-relaxed">
              We sent a 6-digit verification code to your email. Enter each digit below to unlock password reset.
            </p>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 sm:p-10 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold tracking-wide text-slate-900">
                Verify OTP
              </h2>
              <p className="text-sm font-normal tracking-wide text-slate-500">
                Check your inbox for the 6-digit code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-3">
                  6-Digit OTP Code<span className="text-indigo-600">*</span>
                </label>
                
                {/* 6 Individual OTP Digit Input Boxes */}
                <div className="flex items-center justify-between gap-2 sm:gap-3" onPaste={handlePaste}>
                  {otpValues.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-semibold text-slate-900 bg-white border border-slate-200 rounded-xl focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all shadow-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-slate-900 px-9 py-3.5 text-lg font-normal tracking-wide text-white shadow-md hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {loading ? "Verifying..." : "Verify Code"}
                </button>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm font-normal tracking-wide text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Resend code
                </Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function VerifyOtp() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-slate-500">Loading...</div>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
