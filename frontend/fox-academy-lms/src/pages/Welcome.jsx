import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";
import auth5 from "../assets/images/auth5.png";

/**
 * Re-implemented Welcome page to exactly match the provided visual design.
 */
const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const storedProfileRaw = localStorage.getItem("currentUserProfile");
  let storedProfile = null;
  try {
    storedProfile = storedProfileRaw ? JSON.parse(storedProfileRaw) : null;
  } catch {
    storedProfile = null;
  }

  const firstName = location.state?.firstName || storedProfile?.firstName || localStorage.getItem("currentUserFirstName") || "there";
  const lastName = location.state?.lastName || storedProfile?.lastName || "";
  const fullName = `${firstName} ${lastName}`.trim();
  const role = location.state?.role || storedProfile?.role || "student";
  const course = location.state?.course || storedProfile?.course || "your learning track";

  const roleLabel = String(role).charAt(0).toUpperCase() + String(role).slice(1);
  const courseLabel = String(course)
    .split("-")
    .join(" ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

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
          className="h-87.5 w-full object-cover"
          loading="eager"
        />
      </div>

      {/* 3. Text & CTA Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#111827]">
          Welcome to Fox Academy, {fullName} 👋
        </h1>

        <p className="mb-8 max-w-190 text-lg leading-relaxed text-[#6B7280]">
          You&apos;ve successfully joined as a {roleLabel} in {courseLabel}. Phase 2 <br className="hidden md:block" />
          runs from March 17th to June 10th — that's 85 days to learn, build, and deliver <br className="hidden md:block" />
          alongside your team. Let's get you set up.
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
