import { FiClock, FiSearch, FiDownload, FiLayout } from "react-icons/fi";

const featuresData = [
  {
    id: 1,
    icon: FiClock,
    iconBg: "bg-sky-50 text-sky-500 border border-sky-100",
    title: "Fast Job Match",
    description:
      "Job-match your resume in less than 30 seconds, with a clear to-do list of what you need to fix.",
  },
  {
    id: 2,
    icon: FiSearch,
    iconBg: "bg-emerald-50 text-emerald-500 border border-emerald-100",
    title: "Keyword Matching",
    description:
      "Keyword-match vital sections, ensuring your Summary, Experience, and Skills sections are on point.",
  },
  {
    id: 3,
    icon: FiDownload,
    iconBg: "bg-indigo-50 text-indigo-500 border border-indigo-100",
    title: "Unlimited Downloads",
    description:
      "Download unlimited tailored resumes, and apply to as many positions as you need to.",
  },
  {
    id: 4,
    icon: FiLayout,
    iconBg: "bg-amber-50 text-amber-500 border border-amber-100",
    title: "Auto Formatting",
    description:
      "Automatically adjust your resume format for different roles, whether technical, creative, or managerial.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-slate-50/40 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="space-y-3">
                {/* Icon Box */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${feature.iconBg}`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Title */}
                <h3 className="text-h4 font-semibold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
