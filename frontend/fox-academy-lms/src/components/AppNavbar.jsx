import React, { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import foxLogo from '../assets/images/foxlogo.svg';
import ProfileDropdown from './ProfileDropdown';
import amaraImg from '../assets/images/amara.jpg';

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

  return (
    <nav className="border-b border-[#D1D5DC] bg-white sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 md:px-10 h-16">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-start gap-3 shrink-0 lg:w-48">
            <img src={foxLogo} alt="Fox Academy Logo" className="h-6 w-6 mt-1" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-bold leading-none text-[#F38821]">
                Fox<br />Academy
              </h1>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 h-full">
            <Link 
              to="/dashboard" 
              className={`h-full flex items-center text-sm pt-0.5 ${isActive('/dashboard') ? 'border-b-2 border-[#F38821] text-[#F38821] font-medium' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              My Learning
            </Link>
            <Link 
              to="#assignments" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Assignments
            </Link>
            <Link 
              to="#progress" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Progress
            </Link>
            <Link 
              to="#resources" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Resources
            </Link>
            <Link 
              to="#community" 
              className="h-full flex items-center text-[#6B7280] hover:text-[#111827] text-sm pt-0.5"
            >
              Community
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-[#6B7280] hover:text-[#111827]">
            <Bell className="h-6 w-6" />
          </button>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden outline-none focus:ring-2 focus:ring-[#F38821] focus:ring-offset-2 transition-all block cursor-pointer border border-transparent"
            >
              <img src={amaraImg} alt="Profile" className="w-full h-full object-cover" />
            </button>

            {isDropdownOpen && (
              <ProfileDropdown onClose={() => setIsDropdownOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
