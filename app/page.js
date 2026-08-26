import Link from "next/link";
import { FaArrowRight, FaChevronRight, FaSparkles } from "react-icons/fa6";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TemplateShowcase from "@/components/TemplateShowcase";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://resumai.com/#organization",
        "name": "ResumAI",
        "url": "https://resumai.com",
        "logo": "https://resumai.com/logo.png",
        "sameAs": [
          "https://twitter.com/resumai",
          "https://linkedin.com/company/resumai",
          "https://github.com/resumai"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://resumai.com/#application",
        "name": "ResumAI Resume Builder",
        "operatingSystem": "All",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://resumai.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the AI resume builder work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ResumAI analyzes job descriptions, recommends tailored bullet points, optimizes your keywords for ATS, and formats your resume professionally."
            }
          },
          {
            "@type": "Question",
            "name": "Can I export my resume to PDF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can export high-resolution ATS-friendly PDFs and editable Word documents."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-12 relative overflow-hidden bg-slate-50/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-teal-50/80 via-emerald-50/30 to-transparent pointer-events-none -z-10 blur-3xl" />

      {/* Hero Section */}
      <div className="pt-24 sm:pt-32 pb-8 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="max-w-4xl space-y-7">
          {/* Top Badge Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight">
              ResumAI
            </span>
            <span className="h-3 w-px bg-slate-200" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#207a75]">
              FREE AI RESUME BUILDER
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-display font-extrabold text-slate-900">
            Make Your Resume{" "}
            <span className="bg-gradient-to-r from-[#1b5e59] via-[#207a75] to-emerald-600 bg-clip-text text-transparent">
              Impossible to Ignore
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg text-slate-600 font-normal max-w-2xl mx-auto">
            Tired of getting ghosted? ResumAI helps you create a resume in minutes to stand out and land interviews.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 pt-3 sm:pt-4">
            <Link
              href="/auth/register"
              className="rounded-full bg-[#207a75] hover:bg-[#165a56] text-white px-6 sm:px-8 py-3 sm:py-3.5 text-button font-bold uppercase shadow-xl hover:shadow-2xl hover:shadow-teal-900/20 transition-all flex items-center gap-2.5 active:scale-95 cursor-pointer ring-4 ring-teal-500/10"
            >
              <span>GET STARTED 🤖</span>
              <FaChevronRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="#how-it-works"
              className="rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 px-5 sm:px-7 py-3 sm:py-3.5 text-button font-semibold flex items-center gap-2 shadow-xs transition-all group cursor-pointer"
            >
              <span>Learn more</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* How It Works Process Section */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Template Showcase Section */}
      <TemplateShowcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Frequently Asked Questions Section */}
      <Faq />
    </div>
  );
}
