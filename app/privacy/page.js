"use client";

import { FiShield, FiLock, FiEye, FiCheckSquare, FiTrash2, FiHelpCircle } from "react-icons/fi";

export default function Privacy() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 px-6 lg:px-12 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-caption font-medium tracking-wide text-slate-800 shadow-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#207a75] text-white text-xs">
            <FiShield />
          </span>
          Privacy Policy
        </span>
        <h1 className="text-h1 font-semibold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-caption font-normal">
          Last updated: August 26, 2026 · Effective Date: August 26, 2026
        </p>
      </div>

      {/* Content Section */}
      <div className="prose max-w-none text-slate-600 space-y-8 font-normal leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-h2 font-semibold text-slate-900 flex items-center gap-2.5">
            <FiEye className="text-[#207a75]" /> 1. Information We Collect
          </h2>
          <p className="text-body-reg">
            At ResumAI, we take your privacy seriously. We collect personal information necessary to deliver and personalize our AI resume optimization services.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-reg text-slate-600">
            <li><strong>Account Data:</strong> Name, work email address, and authentication credentials upon account creation.</li>
            <li><strong>Resume Content:</strong> Employment history, educational background, skills, certifications, and contact details provided in your resume drafts.</li>
            <li><strong>Technical Diagnostics:</strong> IP addresses, browser types, device information, and usage analytics to ensure system stability and performance.</li>
            <li><strong>Payment Information:</strong> Transaction metadata processed securely via accredited third-party payment gateways (we do not store raw credit card numbers).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-h2 font-semibold text-slate-900 flex items-center gap-2.5">
            <FiCheckSquare className="text-[#207a75]" /> 2. How We Use Your Data
          </h2>
          <p className="text-body-reg">
            Your information is used strictly to power core resume building and optimization features:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-reg text-slate-600">
            <li>Generating AI bullet points, tailored summary suggestions, and ATS keyword matching scores.</li>
            <li>Processing high-resolution exports into PDF, Word (.docx), and plain text formats.</li>
            <li>Communicating security alerts, system maintenance updates, and account notices.</li>
            <li>Improving machine learning algorithm precision using aggregated, anonymized dataset samples.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-h2 font-semibold text-slate-900 flex items-center gap-2.5">
            <FiLock className="text-[#207a75]" /> 3. Data Protection & Encryption
          </h2>
          <p className="text-body-reg">
            All user data is encrypted in transit via TLS 1.3 and at rest using AES-256 standards. We store data in secure cloud infrastructure compliant with SOC2 and ISO-27001 standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-h2 font-semibold text-slate-900 flex items-center gap-2.5">
            <FiTrash2 className="text-[#207a75]" /> 4. Your Rights & Data Control
          </h2>
          <p className="text-body-reg">
            You maintain full ownership of your data. You may export, modify, or permanently delete your account and all associated resume drafts at any time from your account settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-h2 font-semibold text-slate-900 flex items-center gap-2.5">
            <FiHelpCircle className="text-[#207a75]" /> 5. Contact Privacy Team
          </h2>
          <p className="text-body-reg">
            For questions or requests regarding your personal data, contact our Privacy Officer at <a href="mailto:privacy@resume.ai" className="text-[#207a75] font-semibold hover:underline">privacy@resume.ai</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
