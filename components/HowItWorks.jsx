import { FaFilePdf, FaRobot, FaDownload, FaArrowRight, FaCogs } from "react-icons/fa";

const stepsData = [
  {
    stepNumber: "01",
    icon: FaFilePdf,
    badgeBg: "bg-sky-50 text-sky-600 border-sky-100",
    stepColor: "text-sky-600",
    title: "1. Create Your Resume",
    description:
      "Build your resume from scratch using our AI smart builder or import your details to create a clean, professional PDF document.",
  },
  {
    stepNumber: "02",
    icon: FaRobot,
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    stepColor: "text-emerald-600",
    title: "2. Run ATS Checker",
    description:
      "Scan your resume through our AI ATS checker to score keyword relevance, formatting compatibility, and targeted job matches.",
  },
  {
    stepNumber: "03",
    icon: FaDownload,
    badgeBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    stepColor: "text-indigo-600",
    title: "3. Download Final PDF",
    description:
      "Export your ATS-optimized PDF resume in seconds and start applying to top job openings with high recruiter callback rates.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#207a75] font-semibold text-caption uppercase">
            <FaCogs className="w-4 h-4" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-h2 font-bold text-slate-900">
            How Resume.ai Works
          </h2>
          <p className="text-body-reg text-slate-500">
            Create your PDF, optimize it with our AI ATS checker, and download your final job-ready resume.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="relative bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.badgeBg}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-h3 font-extrabold opacity-40">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-h3 font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector for Desktop */}
                {index < stepsData.length - 1 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
