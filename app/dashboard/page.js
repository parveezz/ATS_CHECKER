"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiFileText,
  FiPlus,
  FiZap,
  FiTrendingUp,
  FiDownload,
  FiEdit3,
  FiTrash2,
  FiCheckCircle,
  FiClock,
  FiSearch,
} from "react-icons/fi";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState({ name: "Alex Hunt", email: "alex.hunt@example.com" });
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "Senior Full Stack Engineer Resume",
      targetRole: "Software Engineer",
      atsScore: 96,
      lastUpdated: "2 hours ago",
      template: "Executive Teal",
    },
    {
      id: 2,
      title: "Product Lead - Cloud Platforms",
      targetRole: "Product Manager",
      atsScore: 91,
      lastUpdated: "Yesterday",
      template: "Creative Tech Emerald",
    },
    {
      id: 3,
      title: "Tech Director Cover Letter",
      targetRole: "Engineering Director",
      atsScore: 98,
      lastUpdated: "3 days ago",
      template: "Minimalist Slate",
    },
  ]);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("token");
    if (!token) {
      // Store dummy token for demo seamless experience
      localStorage.setItem("token", "demo_session_token");
    }
  }, []);

  const handleDelete = (id) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    toast.success("Document removed successfully");
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto space-y-8">
      {/* Top Banner Row */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-[#1b5e59] p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-400/30 px-3.5 py-1 text-caption text-teal-300 font-semibold">
            <FiZap className="w-3.5 h-3.5" />
            <span>Pro Plan Active · Unlimited Exports</span>
          </div>
          <h1 className="text-h1 font-extrabold tracking-tight">
            Welcome back, {user.name.split(" ")[0]} 👋
          </h1>
          <p className="text-body-reg text-slate-300">
            Your resumes are optimized and ready for top Applicant Tracking Systems (ATS).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 z-10">
          <Link
            href="/templates"
            className="rounded-full bg-[#207a75] hover:bg-[#165a56] text-white px-6 py-3 text-button font-bold shadow-lg transition-all flex items-center gap-2 active:scale-95"
          >
            <FiPlus className="w-4 h-4" />
            <span>New Resume</span>
          </Link>

          <Link
            href="/profile"
            className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 text-button font-medium transition-all"
          >
            Account Settings
          </Link>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption font-semibold text-slate-400 uppercase tracking-wider">
              Resumes Created
            </span>
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#207a75] flex items-center justify-center font-bold">
              <FiFileText className="w-4 h-4" />
            </div>
          </div>
          <p className="text-h1 font-bold text-slate-900">{documents.length}</p>
          <span className="text-caption text-emerald-600 font-semibold flex items-center gap-1">
            <FiTrendingUp className="w-3 h-3" /> 2 created this week
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption font-semibold text-slate-400 uppercase tracking-wider">
              Avg ATS Match Rate
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <FiCheckCircle className="w-4 h-4" />
            </div>
          </div>
          <p className="text-h1 font-bold text-slate-900">95%</p>
          <span className="text-caption text-emerald-600 font-semibold">
            Top 2% of applicants
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption font-semibold text-slate-400 uppercase tracking-wider">
              Targeted Keywords
            </span>
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <FiSearch className="w-4 h-4" />
            </div>
          </div>
          <p className="text-h1 font-bold text-slate-900">184</p>
          <span className="text-caption text-slate-500">
            Matched to job posts
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption font-semibold text-slate-400 uppercase tracking-wider">
              PDF Downloads
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FiDownload className="w-4 h-4" />
            </div>
          </div>
          <p className="text-h1 font-bold text-slate-900">14</p>
          <span className="text-caption text-slate-500">
            High-res vector PDFs
          </span>
        </div>
      </div>

      {/* Main Documents Table Section */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-h2 font-semibold text-slate-900">
              My Resumes & Documents
            </h2>
            <p className="text-body-sm text-slate-500">
              Manage your saved templates, run ATS scans, and download exports
            </p>
          </div>

          <Link
            href="/templates"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-button font-medium text-slate-700 hover:bg-slate-50 transition-all"
          >
            <FiPlus className="w-4 h-4 text-[#207a75]" />
            <span>Create Document</span>
          </Link>
        </div>

        {/* Document Cards List */}
        <div className="space-y-4 pt-2">
          {documents.length === 0 ? (
            <div className="text-center py-12 space-y-3 border-2 border-dashed border-slate-200 rounded-2xl">
              <FiFileText className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-body-reg text-slate-500">No resumes found. Create your first document now!</p>
              <Link
                href="/templates"
                className="inline-block rounded-full bg-[#207a75] text-white px-6 py-2.5 text-button font-bold shadow-sm"
              >
                Browse Templates
              </Link>
            </div>
          ) : (
            documents.map((doc) => (
              <div
                key={doc.id}
                className="rounded-2xl border border-slate-200/80 hover:border-teal-300 bg-slate-50/50 hover:bg-white p-4 sm:p-5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#207a75] flex items-center justify-center font-bold shrink-0">
                    <FiFileText className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-h4 font-bold text-slate-900">
                      {doc.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-caption text-slate-500">
                      <span className="font-medium text-slate-700">Role: {doc.targetRole}</span>
                      <span>•</span>
                      <span>Template: {doc.template}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" /> {doc.lastUpdated}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200/60">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-caption font-bold border border-emerald-200/60">
                    <span>ATS Score:</span>
                    <span className="text-sm font-extrabold">{doc.atsScore}%</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/templates"
                      className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#207a75] hover:border-teal-200 transition-all cursor-pointer"
                      title="Edit Document"
                    >
                      <FiEdit3 className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => toast.success(`Downloading ${doc.title}.pdf`)}
                      className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all cursor-pointer"
                      title="Download PDF"
                    >
                      <FiDownload className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200 transition-all cursor-pointer"
                      title="Delete"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
