import React from "react";

// 1. We add activeUsers as a prop here
const RightSidebar = ({ activeUsers = [] }) => {
  const sectionHeaderClass =
    "text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[1px] mb-4";

  return (
    <aside className="hidden xl:flex flex-col w-[288px] bg-[#F3F3F3] border-l border-gray-200 p-8 min-h-screen">
      <div className="flex flex-col gap-10 flex-1">
        {/* Active Now Section */}
        <div>
          <h3 className={sectionHeaderClass}>ACTIVE NOW</h3>
          <div className="flex flex-col gap-4">
            {/* 2. We loop through the dynamic users instead of hardcoding them */}
            {activeUsers.map((user, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#E5E5E5] flex items-center justify-center text-[9px] font-bold text-gray-800 border border-white">
                    {user.initials}
                  </div>
                  {/* Green Active Dot */}
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-[1.5px] border-[#F3F3F3] rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-gray-900">
                  {user.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pinned Resources Section */}
        <div>
          <h3 className={sectionHeaderClass}>PINNED RESOURCES</h3>
          <div className="flex flex-col gap-3">
            {/* Resource 1: File Document Icon */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-3 cursor-pointer hover:shadow-md transition-all border border-gray-100">
              <div className="mt-0.5 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  />
                  <polyline
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="13 2 13 9 20 9"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-gray-900 truncate">
                  UX_Challenge_Brief.pdf
                </span>
                <span className="text-[9px] font-bold text-[#A1A1AA]">
                  2.4 MB
                </span>
              </div>
            </div>

            {/* Resource 2: Link Icon */}
            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-3 cursor-pointer hover:shadow-md transition-all border border-gray-100">
              <div className="mt-0.5 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-gray-900 truncate">
                  Wireframing_Checklist
                </span>
                <span className="text-[9px] font-bold text-[#A1A1AA]">
                  Notion Page
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Warning Note */}
      <div className="bg-[#1A1A1A] p-5 rounded-2xl mt-8 flex items-start gap-3">
        <div className="text-white mt-0.5">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v5h-2z" />
          </svg>
        </div>
        <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
          Spamming the group or posting contents not related to the internship
          will get you kicked out of the cohort. Be guided accordingly!
        </p>
      </div>
    </aside>
  );
};

export default RightSidebar;
