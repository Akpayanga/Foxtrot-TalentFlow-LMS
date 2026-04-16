import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";
import auth5 from "../assets/images/auth5.png";

/**
 * Re-implemented Welcome page to exactly match the provided visual design.
 */
const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedApplicant = (() => {
    try {
      const value = localStorage.getItem("applicantProfile");
      return value ? JSON.parse(value) : {};
    } catch (error) {
      console.warn("Failed to parse applicantProfile from localStorage", error);
      return {};
    }
  })();

  const applicant = {
    ...storedApplicant,
    ...(location.state?.applicant || {}),
  };

  const firstName = applicant?.firstName || "Applicant";
  const course = applicant?.course || "your selected program";
  const duration = applicant?.duration || "the program timeline";

  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-12 md:py-16">
      {/* 1. Progress Indicator (Flat Segments) */}
      <div className="mb-12 w-full max-w-2xl px-6">
        <div className="mb-3 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-[#F38821]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          <div className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
        </div>
        <p className="text-center text-sm font-medium text-[#6B7280]">
          Step 1 of 5
        </p>
      </div>

      {/* 2. Hero Image Section */}
      <div className="mb-8 w-full max-w-3xl overflow-hidden rounded-xl">
        <img
          src={auth5}
          alt="Collaboration Handshake"
          className="h-[350px] w-full object-cover"
          loading="eager"
        />
      </div>

      {/* 3. Text & CTA Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#111827]">
          Welcome to Fox Academy, {firstName} 👋
        </h1>

        <p className="mb-8 max-w-[760px] text-lg leading-relaxed text-[#6B7280]">
          You&apos;ve officially joined the program as a {course}. Program duration: {duration}. <br className="hidden md:block" />
          This journey is your chance to learn, build, and deliver alongside your team. <br className="hidden md:block" />
          Let&apos;s get you set up.
        </p>

        <button
          type="button"
          onClick={() => navigate("/onboarding/profile")}
          className="inline-flex items-center gap-2 rounded-lg bg-[#F38821] px-10 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#e37b1d]"
        >
          Lets get Started
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
