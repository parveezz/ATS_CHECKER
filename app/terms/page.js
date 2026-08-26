"use client";

import { FiFileText, FiCheckCircle, FiAlertTriangle, FiCreditCard, FiSlash, FiMail } from "react-icons/fi";

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-normal tracking-wide text-slate-800 shadow-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
            <FiFileText />
          </span>
          Legal Terms
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-slate-900">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-base font-normal tracking-wide">
          Last updated: August 26, 2026 · Effective Date: August 26, 2026
        </p>
      </div>

      {/* Content Section */}
      <div className="prose max-w-none text-slate-600 space-y-10 font-normal tracking-wide leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiCheckCircle className="text-indigo-600" /> 1. Acceptance of Terms
          </h2>
          <p>
            Welcome to Resume.ai. By creating an account, accessing our web application, or utilizing any AI resume optimization service provided by Resume.ai, you agree to comply with and be bound by these Terms of Service.
          </p>
          <p>
            These terms constitute a legally binding agreement between you ("User") and Resume.ai. If you do not agree with any portion of these terms, you must immediately discontinue use of the platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiFileText className="text-indigo-600" /> 2. Description of Platform Services
          </h2>
          <p>
            Resume.ai offers web-based tools for resume creation, cover letter generation, ATS keyword optimization, and document exports. Features include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Interactive resume builders with customizable templates.</li>
            <li>AI-assisted content generation, bullet point recommendations, and spell checking.</li>
            <li>ATS compatibility checking and keyword match percentage analytics.</li>
            <li>Document exports in high-resolution PDF, editable Word (.docx), and plain text formats.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiAlertTriangle className="text-indigo-600" /> 3. User Conduct & Acceptable Use
          </h2>
          <p>
            You agree to use Resume.ai solely for lawful personal career development purposes. You explicitly agree NOT to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Input fraudulent, deceptive, or misleading work experiences and identity information.</li>
            <li>Attempt to reverse-engineer, decompile, scrape, or extract source code from the platform.</li>
            <li>Share account credentials with third parties or resell access to Resume.ai services.</li>
            <li>Use automated bots or scripts to access or extract system data.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiCreditCard className="text-indigo-600" /> 4. Subscriptions, Payments & Cancellations
          </h2>
          <p>
            Resume.ai offers both free and paid subscription plans (Starter, Growth, and Enterprise).
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Billing Cycle:</strong> Paid subscriptions are billed in advance on a recurring Monthly or Annual cycle.</li>
            <li><strong>Automatic Renewal:</strong> Subscriptions renew automatically unless cancelled prior to the end of the current billing period.</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time via your account settings. You will retain access until the end of your prepaid period.</li>
            <li><strong>Refund Policy:</strong> We offer a 14-day money-back guarantee for initial paid tier subscriptions.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiSlash className="text-indigo-600" /> 5. Limitation of Liability & Warranties
          </h2>
          <p>
            Resume.ai is provided on an "as is" and "as available" basis. While our AI tools optimize resumes for ATS standards, Resume.ai does not guarantee employment offers, job interview callbacks, or specific hiring outcomes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2.5">
            <FiMail className="text-indigo-600" /> 6. Questions & Legal Inquiries
          </h2>
          <p>
            If you have questions regarding these Terms of Service, please contact our legal department at:
          </p>
          <p className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-800 font-normal">
            Legal Email: <span className="text-indigo-600">legal@resume.ai</span><br />
            Support Center: <a href="/contact" className="text-indigo-600 hover:underline">Contact Support</a>
          </p>
        </section>
      </div>
    </div>
  );
}
