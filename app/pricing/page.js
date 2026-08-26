"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("annual"); // "monthly" or "annual"
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("growth"); // user clickable selected plan

  const plans = [
    {
      id: "starter",
      name: "Starter",
      subtitle: "Perfect for small teams",
      priceMonthly: "$49",
      priceAnnual: "$39",
      billingTextMonthly: "Billed monthly · $49/mo billed monthly",
      billingTextAnnual: "Billed annually · $49/mo billed monthly",
      features: [
        { text: "Up to 500 deliveries/month", included: true },
        { text: "5 driver accounts", included: true },
        { text: "Real-time tracking", included: true },
        { text: "Email notifications", included: false },
        { text: "Basic route optimization", included: false },
        { text: "Standard analytics", included: false },
      ],
      buttonText: "Start Free Trial",
    },
    {
      id: "growth",
      name: "Growth",
      subtitle: "AI tools for scaling teams.",
      badge: "Most Popular",
      priceMonthly: "$149",
      priceAnnual: "$119",
      billingTextMonthly: "Billed monthly · $149/mo billed monthly",
      billingTextAnnual: "Billed annually · $149/mo billed monthly",
      features: [
        { text: "Up to 500 deliveries/month", included: true },
        { text: "10 driver accounts", included: true },
        { text: "Real-time tracking", included: true },
        { text: "Email notifications", included: true },
        { text: "Basic route optimization", included: true },
        { text: "Standard analytics", included: true },
      ],
      buttonText: "Start Free Trial",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      subtitle: "AI tools for scaling teams.",
      customPrice: "Custom",
      billingTextMonthly: "Custom pricing built around your needs",
      billingTextAnnual: "Custom pricing built around your needs",
      features: [
        { text: "Unlimited deliveries", included: true },
        { text: "Unlimited driver accounts", included: true },
        { text: "Custom AI model training", included: true },
        { text: "24/7 phone support", included: true },
        { text: "SSO & enterprise security", included: true },
        { text: "Custom SLA dashboards", included: true },
      ],
      buttonText: "Talk to Sales",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-8 space-y-3">
        <h1 className="text-h1 font-semibold text-slate-900">
          Transparent Pricing for Growth
        </h1>
        <p className="text-slate-500 text-body-lg font-normal max-w-2xl mx-auto">
          Enjoy predictable costs, powerful features, and the flexibility to scale at your own pace.
        </p>
      </div>

      {/* Animated Monthly / Annual Toggle Switch */}
      <div className="mb-10 relative inline-flex items-center rounded-full bg-slate-100 p-1.5 border border-slate-200/70">
        <button
          type="button"
          onClick={() => setBillingCycle("monthly")}
          className={`relative z-10 rounded-full px-5 sm:px-7 py-2 text-button font-medium transition-colors ${
            billingCycle === "monthly" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
          }`}
        >
          Monthly
          {billingCycle === "monthly" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 z-[-1] rounded-full bg-white shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
        </button>
        <button
          type="button"
          onClick={() => setBillingCycle("annual")}
          className={`relative z-10 rounded-full px-5 sm:px-7 py-2 text-button font-medium transition-colors ${
            billingCycle === "annual" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
          }`}
        >
          Annual
          {billingCycle === "annual" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 z-[-1] rounded-full bg-white shadow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
        </button>
      </div>

      {/* Grid of Individual Flipping Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
        {plans.map((plan, index) => {
          const isSelected = selectedPlan === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className="w-full [perspective:1000px] cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={billingCycle}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                    ease: "easeInOut",
                  }}
                  className={`rounded-3xl border p-4 h-full flex flex-col justify-between transition-all duration-300 [transform-style:preserve-3d] ${
                    isSelected
                      ? "bg-slate-900 border-indigo-500/50 text-white shadow-2xl shadow-indigo-500/20 scale-[1.02]"
                      : "bg-slate-100/70 border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  {/* Card Header Section */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`text-h3 font-bold ${
                          isSelected ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      {plan.badge && (
                        <span className="rounded-full bg-amber-400/20 px-3.5 py-1 text-caption font-semibold text-amber-400 border border-amber-400/40 shadow-sm">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-body-sm ${
                        isSelected ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Inner Content Card */}
                  <div className="mt-3 rounded-2xl bg-white text-slate-900 p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Price Display */}
                      <div className="mb-6 h-16 flex flex-col justify-center">
                        {plan.customPrice ? (
                          <div className="text-h1 font-bold tracking-tight text-slate-900">
                            {plan.customPrice}
                          </div>
                        ) : (
                          <div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-h1 font-extrabold tracking-tight text-slate-900">
                                {billingCycle === "annual"
                                  ? plan.priceAnnual
                                  : plan.priceMonthly}
                              </span>
                              <span className="text-slate-500 text-body-sm font-normal">
                                /mo
                              </span>
                            </div>
                            <p className="text-caption text-slate-400 mt-1 font-normal">
                              {billingCycle === "annual"
                                ? plan.billingTextAnnual
                                : plan.billingTextMonthly}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-body-sm font-normal">
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                feature.included
                                  ? "bg-[#207a75] text-white"
                                  : "bg-slate-100 text-slate-300"
                              }`}
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span
                              className={
                                feature.included
                                  ? "text-slate-700 font-normal"
                                  : "text-slate-300 font-normal"
                              }
                            >
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      className={`w-full rounded-2xl py-3.5 text-button font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#207a75] text-white hover:bg-[#165a56] shadow-md shadow-teal-900/20"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="mt-20 w-full max-w-4xl">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-h2 font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-body-lg">
            Everything you need to know about our plans, billing, and AI resume builder.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "Can I change my plan or cancel anytime?",
              answer:
                "Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your account settings. There are no hidden fees or contracts.",
            },
            {
              question: "How does the AI resume builder work?",
              answer:
                "Our AI analyzes job descriptions, recommends tailored bullet points, optimizes your keywords for ATS (Applicant Tracking Systems), and formats your resume professionally.",
            },
            {
              question: "What happens after my 7-day free trial?",
              answer:
                "During your 7-day free trial, you have full access to all Pro features. If you choose not to subscribe, your account will automatically downgrade to our free Starter plan.",
            },
            {
              question: "Do you offer refunds?",
              answer:
                "We offer a 14-day money-back guarantee for all paid plans if you're not completely satisfied with your resume results.",
            },
            {
              question: "Can I export my resume to PDF and Word?",
              answer:
                "Yes, depending on your plan you can export high-resolution PDFs, editable Word documents (.docx), and plain text formats optimized for online job portals.",
            },
          ].map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 text-h4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 shrink-0 text-[#207a75]"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-body-reg border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
