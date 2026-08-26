"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiUser, FiMail, FiShield, FiLogOut } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login to view your profile.");
        router.push("/auth/login");
        return;
      }

      try {
        const response = await fetch(getApiUrl("/api/auth/profile"), {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUser(data.user || data);
        } else {
          toast.error(data.message || "Failed to load profile.");
          if (response.status === 401) {
            localStorage.removeItem("token");
            router.push("/auth/login");
          }
        }
      } catch (err) {
        toast.error("Could not connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    router.push("/auth/login");
  };

  if (loading) {
    return (
      <div className="pt-32 text-center text-body-reg text-slate-500">
        Loading profile details...
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 px-6 lg:px-12 max-w-2xl mx-auto min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#207a75] text-2xl font-bold">
              {user?.first_name ? user.first_name[0].toUpperCase() : "U"}
            </div>
            <div>
              <h1 className="text-h2 font-semibold text-slate-900">
                {user?.first_name || "User"} {user?.last_name || "Profile"}
              </h1>
              <p className="text-body-sm text-slate-500 flex items-center gap-1.5 pt-0.5">
                <FiMail className="w-3.5 h-3.5 text-[#207a75]" />
                {user?.email || "user@example.com"}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50/50 px-5 py-2 text-button font-medium text-rose-600 hover:bg-rose-100 transition-all cursor-pointer"
          >
            <FiLogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-h3 font-semibold text-slate-900 flex items-center gap-2">
            <FiShield className="text-[#207a75]" />
            <span>Account Overview</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 space-y-1">
              <span className="text-caption text-slate-400">User ID</span>
              <p className="text-body-reg font-semibold text-slate-800">#{user?.id || 1}</p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 space-y-1">
              <span className="text-caption text-slate-400">Account Status</span>
              <p className="text-body-reg font-semibold text-emerald-600 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active Member
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
