import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Eye, EyeOff, ChevronRight } from "lucide-react";

export default function MentorActivate() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center font-sans p-6">
      {/* Header */}
      <div className="mb-10 text-center flex flex-col items-center">
        <h1 className="text-2xl font-black text-[#111827] tracking-[0.02em] flex items-center justify-center uppercase">
          FOX ACADEMY
        </h1>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
          Admin Portal
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100/60 p-10 w-full max-w-[560px]">
        <h2 className="text-[26px] font-bold text-[#111827] tracking-tight mb-4">
          Activate Your Account
        </h2>
        <p className="text-[14px] text-gray-500 mb-8 leading-[1.6] font-medium pr-4">
          Welcome to Fox Academy, Dr. Adeyemi. You've been added as a UX Design Mentor for Cohort 3. Set your password below to get started.
        </p>

        {/* User Pill */}
        <div className="border border-gray-100 rounded-lg p-4 flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-[#E58941] text-white flex items-center justify-center font-bold text-base">
              FA
            </div>
            <div>
              <p className="font-bold text-[#111827] text-[15px] mb-0.5">Dr. Funke Adeyemi</p>
              <p className="text-xs text-gray-500 font-medium">UX Design Mentor &middot; Cohort 3</p>
            </div>
          </div>
          <Lock className="text-gray-300" size={16} />
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* New Password */}
          <div>
            <label className="block text-[13px] font-bold text-[#111827] mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full border border-gray-100 rounded-md p-3.5 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] pr-10 text-gray-600 placeholder-gray-300 bg-gray-50/30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[13px] font-bold text-[#111827] mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                className="w-full border border-gray-100 rounded-md p-3.5 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] pr-10 text-gray-600 placeholder-gray-300 bg-gray-50/30"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Password Strength */}
          <div className="flex items-center gap-3 pt-2 pb-2">
            <div className="flex gap-1.5 w-[76px]">
              <div className="h-1 flex-1 bg-[#4CAF50] rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
            </div>
            <span className="text-[11px] font-bold text-[#111827] ml-2">Password strength</span>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 mt-8 mb-10 pt-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-0.5 h-4 w-4 rounded border-gray-200 text-[#D97706] focus:ring-[#D97706] accent-[#D97706]"
            />
            <label htmlFor="terms" className="text-[13px] text-gray-500 font-medium leading-tight">
              I agree to the Fox Academy Terms of Use and Privacy Policy
            </label>
          </div>

          {/* Activate Button */}
          <div className="flex justify-center mb-10">
            <button className="bg-[#D97706] text-white px-8 py-3.5 rounded-lg text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#B45309] transition w-[280px]">
              Activate and continue <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-[11px] text-gray-400 text-center leading-[1.8] font-medium mx-auto max-w-[360px]">
            This activation link expires <span className="text-[#E58941] font-bold">48 hours</span> after it was sent. If your link has expired, contact your Global Admin.
          </p>
        </form>
      </div>

      {/* Bottom Link */}
      <div className="mt-8 text-center flex items-center justify-center">
        <p className="text-[13px] text-gray-500 font-medium">
          Already activated? <Link to="/login" className="text-[#D97706] font-bold hover:underline">Sign in &rarr;</Link>
        </p>
      </div>
    </div>
  );
}
