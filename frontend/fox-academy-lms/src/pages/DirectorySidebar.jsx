import React from "react";
import AmaraImg from "../assets/images/amara.jpg";
import { Link } from "react-router-dom";

const timeline = [
  { week: "Week 09 · Current", title: "Research & Low-fidelity", isCurrent: true },
  { week: "Week 10 · Next", title: "Prototyping Phase", isCurrent: false },
  { week: "Week 11 · Milestone", title: "Internal Review", isCurrent: false },
];

export default function DirectorySidebar() {
  return (
    <div className="space-y-6 w-full">
      
      {/* Your Profile Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-5">
          <h3 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">
            Your Profile
          </h3>
          <Link to="/onboarding/profile" className="text-blue-500 text-xs font-semibold hover:underline">
            Edit
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={AmaraImg}
            className="w-10 h-10 rounded-full object-cover"
            alt="Amara Obi"
          />
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none mb-1">Amara Obi</p>
            <p className="text-xs text-gray-500">UI/UX</p>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest mb-6">
          Project Timeline
        </h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-[1.5px] bg-gray-100" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start relative">
                <div className="shrink-0 mt-1 z-10">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      item.isCurrent
                        ? "bg-[#F38821] border-[#F38821]"
                        : "bg-white border-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold tracking-wide mb-0.5">
                    {item.week}
                  </p>
                  <p className={`text-sm font-bold ${item.isCurrent ? "text-gray-900" : "text-gray-500"}`}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note Card */}
      <div className="bg-[#F38821] rounded-2xl p-5 text-white shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          {/* Pin icon */}
          <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4" />
          </svg>
          <h3 className="text-[11px] font-bold uppercase tracking-widest">Note</h3>
        </div>
        <p className="text-sm leading-relaxed text-white/95">
          Individual 1-on-1 performance reviews are scheduled for next Friday.
          Please ensure your personal progress logs are updated in the directory
          system by Wednesday EOD.
        </p>
      </div>

    </div>
  );
}
