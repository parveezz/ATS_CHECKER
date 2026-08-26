import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="max-w-3xl space-y-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-normal tracking-wide text-indigo-700 shadow-sm">
            ✨ Next-Generation AI Resume Builder
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
          Build professional resumes powered by <span className="text-indigo-600">AI intelligence</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 font-normal tracking-wide max-w-2xl mx-auto leading-relaxed">
          Craft ATS-tailored resumes in minutes. Resume.ai optimizes your skills and experience to help you land more interviews.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <Link
            href="/auth/register"
            className="rounded-full bg-indigo-600 px-8 py-3.5 text-lg font-medium tracking-wide text-white shadow-md hover:bg-indigo-700 transition-all"
          >
            Create My Resume Now
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-lg font-normal tracking-wide text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
          >
            View Pricing & Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
