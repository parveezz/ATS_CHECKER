"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiShield } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

function VerifyOtpContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const emailParam = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailParam);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOtpChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value.slice(-1);
    setOtpValues(newOtp);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pastedData)) return;

    const chars = pastedData.slice(0, 6).split("");
    const newOtp = ["", "", "", "", "", ""];
    chars.forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtpValues(newOtp);

    const nextIndex = Math.min(chars.length, 5);
    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otpValues.join("");

    if (fullOtp.length !== 6) {
      toast.error("Please enter the complete 6-digit OTP.");
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
        router.push(`/auth/reset-password?resetToken=${encodeURIComponent(resetToken)}&token=${encodeURIComponent(resetToken)}`);
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
    <div className="pt-24 sm:pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto min-h-[calc(100vh-18rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-caption font-medium tracking-wide text-slate-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#207a75] text-white text-xs">
                <FiShield />
              </span>
              Security Verification
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-h1 font-semibold text-slate-900 leading-tight">
              Enter 6-Digit <span className="text-[#207a75] font-normal">OTP Code</span>
            </h1>
            <p className="text-slate-500 text-body-lg font-normal leading-relaxed">
              We have sent a verification code to <span className="font-semibold text-slate-800">{email || "your email"}</span>. Enter the code below to reset your password.
            </p>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7 max-w-md w-full mx-auto">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-h2 font-semibold text-slate-900">
                Verify OTP
              </h2>
              <p className="text-body-sm text-slate-500">
                Type or paste your 6-digit security code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-label text-slate-800 mb-3 text-center">
                  Verification Code
                </label>
                <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
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
                      className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-2xl border border-slate-300 text-slate-900 focus:border-[#207a75] focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#207a75] hover:bg-[#165a56] py-3.5 text-button font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? "Verifying Code..." : "Verify & Continue"}</span>
              </button>
            </form>

            <div className="text-center pt-2 border-t border-slate-100">
              <Link
                href="/auth/forgot-password"
                className="text-body-sm text-[#207a75] hover:underline font-semibold"
              >
                ← Resend Code
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function VerifyOtp() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-body-reg text-slate-500">Loading...</div>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
