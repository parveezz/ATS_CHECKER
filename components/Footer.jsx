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
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 text-white shadow-sm">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <span className="text-2xl font-normal tracking-wide text-white">
                Resume<span className="text-indigo-400">.ai</span>
              </span>
            </Link>

            {/* Copyright directly below logo */}
            <p className="text-sm font-normal tracking-wide text-slate-400">
              © {new Date().getFullYear()} Resume.ai. All rights reserved.
            </p>

            <p className="text-slate-400 text-base font-normal tracking-wide leading-relaxed max-w-sm">
              Build ATS-friendly resumes in minutes with real-time AI suggestions, keyword scoring, and professional templates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all"
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
              <h3 className="text-lg font-normal tracking-wide text-white">Product</h3>
              <ul className="space-y-2.5 text-base font-normal tracking-wide text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-white transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div className="space-y-4">
              <h3 className="text-lg font-normal tracking-wide text-white">Account</h3>
              <ul className="space-y-2.5 text-base font-normal tracking-wide text-slate-400">
                <li>
                  <Link href="/auth/login" className="hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="hover:text-white transition-colors">
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-normal tracking-wide text-white">Company</h3>
              <ul className="space-y-2.5 text-base font-normal tracking-wide text-slate-400">
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
