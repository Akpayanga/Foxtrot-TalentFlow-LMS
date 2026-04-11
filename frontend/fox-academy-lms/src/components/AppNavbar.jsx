import React, { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import foxLogo from '../assets/images/foxlogo.svg';
import amara from '../assets/images/amara.jpg';

export default function AppNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => currentPath.startsWith(path);

  const menuLinks = [
    { label: "Profile", to: "/onboarding/profile" },
    { label: "My progress", to: "/progress" },
    { label: "Certificate & Badges", to: "#" },
    { label: "Settings", to: "/settings" },
    { label: "Help center", to: "#" },
  ];

  return (
    <nav className="border-b border-[#D1D5DC] bg-white sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 md:px-10 h-16">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-start gap-3">
            <img src={foxLogo} alt="Fox Academy Logo" className="h-6 w-6" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-bold leading-none text-[#F38821]">
                Fox<br />Academy
              </h1>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 h-full">
            <Link
              to="/mylearning"
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/mylearning') || isActive('/dashboard') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              My Learning
            </Link>
            <Link
              to="/assignments"
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/assignments') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              Assignments
            </Link>
            <Link
              to="/progress"
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/progress') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              Progress
            </Link>
            <Link
              to="/resources"
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/resources') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              Resources
            </Link>
            <Link
              to="/community"
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/community') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              Community
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="relative text-[#6B7280] hover:text-[#111827]">
            <Bell className="h-6 w-6" />
          </button>

          <div className="relative" ref={dropdownRef}>
            {/* Avatar Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-9 w-9 rounded-full overflow-hidden outline-none focus:ring-2 focus:ring-[#F38821] focus:ring-offset-2 border-2 border-[#F38821] cursor-pointer block transition-all"
            >
              <img src={amara} alt="Profile" className="w-full h-full object-cover" />
            </button>

            {/* Full Profile Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-[290px] bg-[#F8F8F8] rounded-3xl shadow-xl border border-gray-100 z-50 p-6 flex flex-col">

                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img src={amara} alt="Amara Okoro" className="w-12 h-12 rounded-full object-cover shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight">Amara Okoro</h3>
                    <p className="text-gray-500 text-sm">Amara@email.com</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 mb-5 text-xs font-semibold">
                  <span className="bg-indigo-50 text-indigo-900 px-3 py-1 rounded-lg">
                    UI/UX Design
                  </span>
                  <span className="bg-[#F38821] text-white px-3 py-1 rounded-lg">
                    cohort 3
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">
                    <span>Phase 1 Progress</span>
                    <span className="text-gray-700 text-sm font-semibold tracking-normal">18%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-indigo-50 overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-4">
                  {menuLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsDropdownOpen(false)}
                      className="text-[16px] font-medium text-slate-800 hover:text-[#F38821] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-[16px] font-medium text-red-600 hover:text-red-700 transition-colors mt-1"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
