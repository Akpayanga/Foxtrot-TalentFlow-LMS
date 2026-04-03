import React from "react";
import { Link } from "react-router-dom"; // <-- Ensure Link is imported

const MainFeed = ({ onOpenSidebar }) => {
  return (
    <main className="flex-1 lg:max-w-[736px] bg-[#F9F9F9] min-h-screen overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden p-4 bg-white border-b flex justify-between items-center sticky top-0 z-20">
        <button
          onClick={onOpenSidebar}
          className="text-[#f38821] font-bold text-xs tracking-widest"
        >
          CHANNELS
        </button>
        <h1 className="font-black text-sm"># ux-design</h1>
      </div>

      <div className="p-6 md:p-8 md:pt-10">
        {/* Page Header & Avatar Stack */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                # ux-design
              </h1>
              <div className="hidden sm:flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-[#F9F9F9] flex items-center justify-center text-[8px] font-bold">
                  AS
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-[#F9F9F9] flex items-center justify-center text-[8px] font-bold">
                  MH
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-[#F9F9F9] flex items-center justify-center text-[8px] font-bold text-white">
                  TR
                </div>
                <div className="w-6 h-6 rounded-full bg-black border-2 border-[#F9F9F9] flex items-center justify-center text-[8px] font-bold text-white">
                  +97
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-xs font-bold mt-2">
              <span className="text-gray-900 border-b-2 border-black pb-2">
                Discussions
              </span>
              <span className="text-gray-400 pb-2">Shared Files</span>
            </div>
          </div>

          {/* UPDATED: Start Discussion button is now a Link */}
          <Link
            to="/community/new"
            className="bg-black text-white px-5 py-2.5 rounded-full text-[11px] font-bold shadow-md hover:bg-gray-800 transition-colors"
          >
            Start Discussion
          </Link>
        </div>

        {/* SORT BUTTONS */}
        <div className="flex items-center gap-4 mb-8 pt-4 border-t border-gray-200">
          <span className="text-[10px] font-bold text-[#A1A1AA] tracking-widest uppercase">
            Sort By:
          </span>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold tracking-wide">
              RECENT
            </button>
            <button className="px-4 py-1.5 bg-white text-gray-500 rounded-full text-[10px] font-bold tracking-wide shadow-sm">
              UNREAD
            </button>
            <button className="px-4 py-1.5 bg-white text-gray-500 rounded-full text-[10px] font-bold tracking-wide shadow-sm">
              POPULAR
            </button>
          </div>
        </div>

        {/* THE FEED */}
        <div className="flex flex-col gap-6 pb-20">
          {/* Pinned Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 text-white shadow-lg relative">
            <div className="absolute top-6 right-6 text-gray-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6h2v-6h5v-2l-2-2z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                M
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                Pinned by Mentor • 2 hours ago
              </span>
            </div>
            <h2 className="text-xl font-bold mb-3">Phase 2 Internship</h2>
            <p className="text-[13px] text-gray-300 leading-relaxed mb-6 max-w-2xl">
              Keep up with your courses and finish all assignments to get
              qualify for the next stage of the internship where you get paired
              with interns from other discipline in the cohort. Phase 2 kicks
              off next week Wednesday.
            </p>
            <div className="flex gap-4 text-[11px] text-[#A1A1AA] font-bold">
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                42 replies
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                1.2k views
              </span>
            </div>
          </div>

          {/* Post: Alex (CLICKABLE LINK) */}
          <Link
            to="/community/post"
            className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#f38821]/40 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  AL
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-900">
                    Alex Livinus
                  </span>
                  <span className="text-[9px] text-[#A1A1AA] font-medium">
                    2 hours ago
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              How do you reduce video quality. My data ooo!!! 😭😭
            </h3>
            <p className="text-[13px] text-gray-400 mb-6 truncate">
              Hey everyone, I'm currently going through the curriculum but I
              noticed...
            </p>
            <div className="text-[11px] text-[#A1A1AA] font-bold flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              8 replies
            </div>
          </Link>

          {/* Post: Sarah */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  SC
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-900">
                    Sarah Udo
                  </span>
                  <span className="text-[9px] text-[#A1A1AA] font-medium">
                    4 hours ago
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              Having problems mastering auto layout
            </h3>
            <p className="text-[13px] text-gray-400 mb-6 truncate">
              Designing with auto layout skews my design. I am more comfortable
              with using...
            </p>
            <div className="text-[11px] text-[#A1A1AA] font-bold flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              22 replies
            </div>
          </div>

          {/* Post: Marcus */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-[10px] font-bold">
                  MI
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-900">
                    Marcus Inyang
                  </span>
                  <span className="text-[9px] text-[#A1A1AA] font-medium">
                    Yesterday
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainFeed;
