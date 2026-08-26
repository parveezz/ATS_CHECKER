"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiLock, FiEye, FiEyeOff, FiKey } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tokenParam = searchParams.get("token") || searchParams.get("resetToken") || "";

  const [resetToken, setResetToken] = useState(tokenParam);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(getApiUrl("/api/auth/reset-password"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetToken, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Password reset successfully!");
        router.push("/auth/login");
      } else {
        toast.error(data.message || "Failed to reset password. Token may be invalid.");
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
              Security Reset
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-h1 font-semibold text-slate-900 leading-tight">
              Create New <span className="text-[#207a75] font-normal">Password</span>
            </h1>
            <p className="text-slate-500 text-body-lg font-normal leading-relaxed">
              Your new password must be at least 8 characters long and different from previously used passwords.
            </p>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7 max-w-md w-full mx-auto">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-sm space-y-6">
            
            <div className="text-center space-y-1">
              <h2 className="text-h2 font-semibold text-slate-900">
                Set New Password
              </h2>
              <p className="text-body-sm text-slate-500">
                Enter your reset token and new credentials
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-label text-slate-800 mb-1.5">
                  Reset Token<span className="text-[#207a75]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={resetToken}
                  onChange={(e) => setResetToken(e.target.value)}
                  placeholder="Enter 6-digit OTP code"
                  className="w-full rounded-full border border-slate-300 px-5 py-3 text-input text-slate-900 placeholder:text-slate-400 focus:border-[#207a75] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-label text-slate-800 mb-1.5">
                  New Password<span className="text-[#207a75]">*</span>
                </label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-full border border-slate-300 pl-11 pr-12 py-3 text-input text-slate-900 placeholder:text-slate-400 focus:border-[#207a75] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#207a75] hover:bg-[#165a56] py-3.5 text-button font-bold text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? "Resetting Password..." : "Update Password"}</span>
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

export default function ResetPassword() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-body-reg text-slate-500">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
