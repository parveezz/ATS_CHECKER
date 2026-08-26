"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiLock, FiEye, FiEyeOff, FiKey } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get("token") || searchParams.get("resetToken") || "";

  const [resetToken, setResetToken] = useState(tokenParam);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tokenParam) setResetToken(tokenParam);
  }, [tokenParam]);

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
        window.location.href = "/login";
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
    <div className="pt-32 pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto min-h-[calc(100vh-18rem)] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                <FiLock />
              </span>
              Password Update
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
              Create new <span className="text-indigo-600 font-normal">password</span>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl font-normal tracking-wide leading-relaxed">
              Choose a strong password to secure your Resume.ai account and documents.
            </p>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 sm:p-10 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold tracking-wide text-slate-900">
                Reset Password
              </h2>
              <p className="text-sm font-normal tracking-wide text-slate-500">
                Enter your reset token and choose a new password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Reset Token<span className="text-indigo-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <FiKey className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={resetToken}
                    onChange={(e) => setResetToken(e.target.value)}
                    placeholder="Paste reset token..."
                    className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 py-3.5 text-sm font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  New Password<span className="text-indigo-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <FiLock className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="NewSecret123!"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-slate-900 px-9 py-3.5 text-lg font-normal tracking-wide text-white shadow-md hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {loading ? "Updating..." : "Reset Password"}
                </button>
                <Link
                  href="/auth/login"
                  className="text-sm font-normal tracking-wide text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Back to Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-slate-500">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
