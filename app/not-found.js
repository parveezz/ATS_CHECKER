import Link from "next/link";
import { FiAlertTriangle, FiHome } from "react-icons/fi";

export const metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-xl mx-auto text-center space-y-6 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-200">
        <FiAlertTriangle className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-h1 font-bold text-slate-900">404 - Page Not Found</h1>
        <p className="text-body-reg text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#207a75] hover:bg-[#165a56] text-white px-6 py-3 text-button font-bold shadow-md transition-all"
      >
        <FiHome className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
