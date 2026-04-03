import React, { useState } from "react";

const ChannelSidebar = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const channelClass =
    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-[12px] font-black transition-all cursor-pointer tracking-[1.2px]";
  const activeClass = "bg-[#f38821] text-white shadow-sm";
  const inactiveClass = "text-gray-400 hover:bg-white/40 hover:text-gray-600";

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        fixed lg:relative z-50 lg:z-0
        w-[256px] h-full bg-[#FEF3E9] border-r border-gray-100 p-6
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col gap-8">
          {/* HEADER SECTION */}
          <div>
            <h2 className="text-[12px] font-[900] text-black uppercase tracking-[1.2px] leading-[16px] mb-0.5">
              STUDENT PORTAL
            </h2>
            <p className="text-[9px] font-[400] text-gray-400 uppercase tracking-[1.2px] opacity-70">
              FOX ACADEMY
            </p>
          </div>

          {/* NAV SECTION - Updated to match the 16px (gap-4) from Figma */}
          <nav className="flex flex-col gap-4">
            <p className="text-[10px] font-[700] text-[#A1A1AA] uppercase tracking-[1.2px] px-4">
              CHANNELS
            </p>

            {/* DROPDOWN MENU */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 rounded-xl text-[11px] font-bold text-gray-500 shadow-sm transition-all"
              >
                <span className="tracking-[1.2px]">UX-DESIGN</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-10 py-2">
                  {[
                    "WEB DEVELOPMENT",
                    "PRODUCT MANAGEMENT",
                    "DATA SCIENCE",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-2 text-[10px] font-bold text-gray-700 hover:bg-orange-50 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CHANNELS LIST */}
            <div className="flex flex-col gap-1">
              <div className={`${channelClass} ${activeClass}`}>
                <span className="text-sm font-medium opacity-70">#</span>
                GENERAL
              </div>

              <div className={`${channelClass} ${inactiveClass}`}>
                <span className="text-sm font-medium opacity-40">#</span>
                SOCIALS
              </div>

              <div className={`${channelClass} ${inactiveClass}`}>
                <span className="text-sm font-medium opacity-40">#</span>
                SHOWCASE
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default ChannelSidebar;
