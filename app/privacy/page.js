"use client";

import { FiShield, FiLock, FiEye, FiCheckSquare, FiTrash2, FiHelpCircle } from "react-icons/fi";

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
            <FiShield />
          </span>
          Privacy Policy
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-base font-normal tracking-wide">
          Last updated: August 26, 2026 · Effective Date: August 26, 2026
        </p>
      </div>

      {/* Content Section */}
      <div className="prose max-w-none text-slate-600 space-y-10 font-normal tracking-wide leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiEye className="text-indigo-600" /> 1. Information We Collect
          </h2>
          <p>
            At Resume.ai, we take your privacy seriously. We collect personal information necessary to deliver and personalize our AI resume optimization services.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
             animate-pulse
            <li><strong>Account Data:</strong> Name, work email address, and authentication credentials upon account creation.</li>
            <li><strong>Resume Content:</strong> Employment history, educational background, skills, certifications, and contact details provided in your resume drafts.</li>
            <li><strong>Technical Diagnostics:</strong> IP addresses, browser types, device information, and usage analytics to ensure system stability and performance.</li>
            <li><strong>Payment Information:</strong> Transaction metadata processed securely via accredited third-party payment gateways (we do not store raw credit card numbers).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiCheckSquare className="text-indigo-600" /> 2. How We Use Your Data
          </h2>
          <p>
            Your information is used strictly to power core resume building and optimization features:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Generating AI bullet points, tailored summary suggestions, and ATS keyword matching scores.</li>
            <li>Processing high-resolution exports into PDF, Word (.docx), and plain text formats.</li>
            <li>Communicating security alerts, system maintenance updates, and account notices.</li>
            <li>Improving machine learning algorithm precision using aggregated, anonymized dataset samples.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiLock className="text-indigo-600" /> 3. Data Protection & Encryption
          </h2>
          <p>
            We implement comprehensive technical and organizational safeguards designed to prevent unauthorized access, disclosure, or alteration of your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>All communication between your device and our servers is encrypted using Industry standard TLS 1.3 encryption.</li>
            <li>Data at rest is stored in secure database clusters with multi-region backup protection.</li>
            <li>Strict role-based access control policies ensure that only authorized system operations access database environments.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiTrash2 className="text-indigo-600" /> 4. Data Ownership & Deletion Rights
          </h2>
          <p>
            You retain 100% ownership over your resume content and personal information at all times.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Right to Export:</strong> You can export your stored resumes in editable or printable formats at any time.</li>
            <li><strong>Right to Erasure:</strong> You can request permanent account and document deletion directly from your account profile or by emailing privacy@resume.ai.</li>
            <li><strong>Data Retention:</strong> Upon account closure, all associated data is permanently erased from active databases within 30 days.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiHelpCircle className="text-indigo-600" /> 5. Contact Privacy Team
          </h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or your personal data rights, please reach out to our Data Protection Officer at:
          </p>
          <p className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-800 font-normal">
            Email: <span className="text-indigo-600">privacy@resume.ai</span><br />
            Address: Silicon Valley Headquarters, CA 94043, United States
          </p>
        </section>
      </div>
    </div>
  );
}
