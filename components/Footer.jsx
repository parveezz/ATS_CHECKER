"use client";

import Link from "next/link";
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white pt-16 pb-12 mt-0 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Upper Grid: Brand + Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Info & Copyright (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#207a75] text-white shadow-sm font-bold text-lg">
                R
              </div>
              <span className="text-2xl font-bold tracking-wide text-white">
                Resum<span className="text-[#207a75]">AI</span>
              </span>
            </Link>

            {/* Copyright directly below logo */}
            <p className="text-body-sm text-slate-400">
              © {new Date().getFullYear()} ResumAI. All rights reserved.
            </p>

            <p className="text-body-reg text-slate-400 leading-relaxed max-w-sm">
              Build ATS-friendly resumes in minutes with real-time AI suggestions, keyword scoring, and professional templates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-[#207a75] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-[#207a75] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-[#207a75] hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-[#207a75] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Grid (Col 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-h4 font-bold text-white">Product</h3>
              <ul className="space-y-2.5 text-body-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing & Plans
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-white transition-colors">
                    Resume Templates
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white transition-colors">
                    Give Feedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div className="space-y-4">
              <h3 className="text-h4 font-bold text-white">Account</h3>
              <ul className="space-y-2.5 text-body-sm text-slate-400">
                <li>
                  <Link href="/auth/login" className="hover:text-white transition-colors">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="hover:text-white transition-colors">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white transition-colors">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Legal */}
            <div className="space-y-4">
              <h3 className="text-h4 font-bold text-white">Company</h3>
              <ul className="space-y-2.5 text-body-sm text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
