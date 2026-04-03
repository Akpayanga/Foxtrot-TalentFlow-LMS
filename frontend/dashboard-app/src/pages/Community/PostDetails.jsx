import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChannelSidebar from "./ChannelSidebar";
import RightSidebar from "./RightSidebar";

const PostDetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 1. Define the specific users active in THIS thread
  const threadActiveUsers = [
    { initials: "AU", name: "Aisha Umaru" },
    { initials: "TO", name: "Tunde Olayinka" },
    { initials: "BA", name: "Blessing A." },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans">
      <div className="flex flex-1 w-full max-w-[1280px] mx-auto overflow-hidden">
        {/* 1. LEFT SIDEBAR (Reused) */}
        <aside className="hidden lg:block w-[256px] border-r border-gray-100 min-h-screen z-10">
          <ChannelSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </aside>

        {/* 2. MAIN THREAD AREA */}
        <main className="flex-1 lg:max-w-[736px] bg-[#F9F9F9] min-h-screen overflow-y-auto p-6 md:p-8">
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="lg:hidden p-4 bg-white border-b flex justify-between items-center sticky top-0 z-20 mb-6 -mx-6 -mt-6 md:-mx-8 md:-mt-8">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-[#f38821] font-bold text-xs tracking-widest"
            >
              CHANNELS
            </button>
            <h1 className="font-black text-sm"># ux-design</h1>
          </div>

          {/* Back Button */}
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors mb-8"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to # ux-design
          </Link>

          {/* ORIGINAL POST (Expanded) */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold">
                  AL
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">
                    Alex Livinus
                  </span>
                  <span className="text-[10px] text-[#A1A1AA] font-bold">
                    2 hours ago
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>

            <h1 className="text-lg font-bold text-gray-900 mb-4">
              How do you reduce video quality. My data ooo!!! 😭😭
            </h1>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
              Hey everyone, I'm currently going through the curriculum but I
              noticed the videos are playing at very high resolution. Is there a
              setting I'm missing to throttle this down? My data sub is crying
              right now and I really need to finish this module before the
              weekend.
            </p>

            <div className="flex gap-6 text-[11px] text-[#A1A1AA] font-bold">
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
                8 replies
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
                342 views
              </span>
            </div>
          </div>

          {/* REPLIES SECTION */}
          <div className="mt-8">
            <h3 className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[1px] mb-4 pl-2">
              8 REPLIES
            </h3>

            <div className="flex flex-col gap-4">
              {/* Reply 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                      MK
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-gray-900">
                        Miracle Kalu
                      </span>
                      <span className="text-[9px] text-[#A1A1AA] font-medium">
                        1h ago
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  I think you can click the gear icon at the bottom right of the
                  video player. There should be a 480p option there.
                </p>
              </div>

              {/* Reply 2 (Mentor) */}
              <div className="bg-[#FAFAFA] rounded-2xl p-6 shadow-inner border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white">
                      FA
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-gray-900">
                          Dr. Funke Adeyemi
                        </span>
                        <span className="bg-black text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wide">
                          MENTOR
                        </span>
                      </div>
                      <span className="text-[9px] text-[#A1A1AA] font-medium">
                        45m ago
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  Hi Alex, we are working on a global data-saver toggle for the
                  dashboard. For now, Miracle's suggestion is the quickest fix!
                </p>
              </div>

              {/* Reply 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                      AO
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-gray-900">
                        Amara O.
                      </span>
                      <span className="text-[9px] text-[#A1A1AA] font-medium">
                        20m ago
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Has anyone tried using the mobile app? I feel like it uses
                  less data compared to the web browser version.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* 3. RIGHT SIDEBAR (Dynamic) */}
        {/* 2. Pass the thread-specific users array as a prop here! */}
        <RightSidebar activeUsers={threadActiveUsers} />
      </div>
    </div>
  );
};

export default PostDetails;
