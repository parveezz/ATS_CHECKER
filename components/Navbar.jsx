"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Templates", href: "/templates" },
    { name: "About Us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="w-full px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 text-white shadow-sm">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>

            <span className="text-2xl font-bold tracking-wider text-slate-900">
              Resume
              <span className="text-indigo-600">
                .ai
              </span>
            </span>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-xl text-lg tracking-wide transition-all ${
                    active
                      ? "bg-indigo-600 text-white font-semibold shadow-md"
                      : "text-slate-700 font-medium hover:bg-indigo-100 hover:text-indigo-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>


          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              href="/auth/login"
              className={`rounded-full border px-8 py-3 text-lg tracking-wide transition-all ${
                pathname === "/auth/login"
                  ? "border-indigo-600 bg-indigo-600 text-white font-semibold shadow-md"
                  : "border-slate-300 text-slate-700 font-normal hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-medium tracking-wide text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
            >
              Register
            </Link>

          </div>


          {/* Mobile Button */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="md:hidden rounded-lg p-2.5 text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>


        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-5">

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-4 py-3 text-lg tracking-wide transition-all ${
                      active
                        ? "bg-indigo-600 text-white font-semibold shadow-sm"
                        : "text-slate-700 font-medium hover:bg-indigo-100 hover:text-indigo-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">

              <Link
                href="/auth/login"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className={`rounded-full border px-5 py-3.5 text-center text-lg tracking-wide transition-all ${
                  pathname === "/auth/login"
                    ? "border-indigo-600 bg-indigo-600 text-white font-semibold shadow-md"
                    : "border-slate-300 text-slate-700 font-normal hover:bg-indigo-50"
                }`}
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="rounded-full bg-indigo-600 px-5 py-3.5 text-center text-lg font-medium tracking-wide text-white"
              >
                Register
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}