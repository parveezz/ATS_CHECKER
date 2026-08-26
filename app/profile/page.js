"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FiUser, FiMail, FiShield, FiLogOut } from "react-icons/fi";
import { getApiUrl } from "@/lib/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login to view your profile.");
        window.location.href = "/auth/login";
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
            window.location.href = "/login";
          }
        }
      } catch (err) {
        toast.error("Could not connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="pt-32 text-center text-slate-500 font-normal tracking-wide">
        Loading profile details...
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 lg:px-12 max-w-2xl mx-auto min-h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-none space-y-8">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-2xl font-bold">
              {user?.first_name ? user.first_name[0].toUpperCase() : "U"}
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-wide text-slate-900">
                {user?.first_name} {user?.last_name}
              </h1>
              <p className="text-sm font-normal tracking-wide text-slate-500 flex items-center gap-1.5 pt-0.5">
                <FiMail className="w-3.5 h-3.5" />
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-normal tracking-wide text-rose-600 hover:bg-rose-50 transition-all"
          >
            <FiLogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold tracking-wide text-slate-900 flex items-center gap-2">
            <FiShield className="text-indigo-600" />
            Account Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 space-y-1">
              <span className="text-xs font-normal tracking-wide text-slate-400">User ID</span>
              <p className="text-base font-semibold tracking-wide text-slate-800">#{user?.id || 1}</p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 space-y-1">
              <span className="text-xs font-normal tracking-wide text-slate-400">Account Status</span>
              <p className="text-base font-semibold tracking-wide text-emerald-600 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active Member
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
