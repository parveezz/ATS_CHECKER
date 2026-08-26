import { Comfortaa } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://resumai.com"),
  title: {
    default: "ResumAI | Free AI Resume Builder & ATS Checker",
    template: "%s | ResumAI",
  },
  description:
    "Create ATS-friendly resumes in minutes with real-time AI suggestions, keyword scoring, and recruiter-approved templates.",
  keywords: [
    "AI resume builder",
    "ATS checker",
    "free resume templates",
    "resume score",
    "ATS keyword matching",
    "job application builder",
  ],
  authors: [{ name: "ResumAI Team" }],
  creator: "ResumAI",
  publisher: "ResumAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resumai.com",
    siteName: "ResumAI",
    title: "ResumAI | Free AI Resume Builder & ATS Checker",
    description:
      "Create ATS-friendly resumes in minutes with real-time AI suggestions, keyword scoring, and recruiter-approved templates.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumAI - Free AI Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumAI | Free AI Resume Builder & ATS Checker",
    description:
      "Create ATS-friendly resumes in minutes with real-time AI suggestions, keyword scoring, and recruiter-approved templates.",
    creator: "@resumai",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comfortaa.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
