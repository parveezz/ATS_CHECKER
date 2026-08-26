"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiUserPlus, FiCpu, FiTarget, FiDownloadCloud, FiEye, FiEyeOff, FiMail, FiLock, FiUser } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
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
      const response = await fetch(getApiUrl("/api/auth/register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "User created successfully!");
        setFormData({ first_name: "", last_name: "", email: "", password: "" });
      } else {
        toast.error(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration connection error:", err);
      toast.error("Could not connect to server. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Welcome Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                <FiUserPlus />
              </span>
              Create Account
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
              Start building with <span className="text-indigo-600">Resume.ai</span>
            </h1>
            <p className="text-slate-500 text-lg sm:text-xl font-normal tracking-wide leading-relaxed">
              Create your free account today and unlock AI-powered resume building, ATS scoring, and professional templates.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3.5 text-slate-700 text-base font-normal tracking-wide bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <FiCpu className="w-5 h-5 text-indigo-600 shrink-0" />
              Tailored AI Resume Suggestions
            </div>
            <div className="flex items-center gap-3.5 text-slate-700 text-base font-normal tracking-wide bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <FiTarget className="w-5 h-5 text-indigo-600 shrink-0" />
              ATS Keywords & Match Analysis
            </div>
            <div className="flex items-center gap-3.5 text-slate-700 text-base font-normal tracking-wide bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <FiDownloadCloud className="w-5 h-5 text-indigo-600 shrink-0" />
              Export High Resolution PDF & Word
            </div>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 sm:p-10 shadow-sm space-y-6">
            
            {/* Header inside Form Box */}
            <div className="space-y-1">
              <h2 className="text-3xl font-semibold tracking-wide text-slate-900">
                Create an Account
              </h2>
              <p className="text-sm font-normal tracking-wide text-slate-500">
                Enter your information to register
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                    First name<span className="text-indigo-600">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <FiUser className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="text"
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                    Last name<span className="text-indigo-600">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <FiUser className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="text"
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Email<span className="text-indigo-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <FiMail className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal tracking-wide text-slate-800 mb-2">
                  Password<span className="text-indigo-600">*</span>
                </label>
                <div className="relative flex items-center">
                  <FiLock className="absolute left-4 text-slate-400 w-5 h-5 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Secret123!"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 py-3.5 text-base font-normal tracking-wide text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5" />
                    ) : (
                      <FiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-slate-900 px-9 py-3.5 text-lg font-normal tracking-wide text-white shadow-md hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {loading ? "Creating..." : "Register"}
                </button>
                <Link
                  href="/auth/login"
                  className="text-sm font-normal tracking-wide text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Already registered? <span className="text-indigo-600 font-semibold">Sign in</span>
                </Link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
