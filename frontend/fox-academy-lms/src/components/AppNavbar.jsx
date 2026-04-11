import { Bell } from "lucide-react";
import { useState } from "react";
import amara from "../assets/images/amara.jpg";
import foxLogo from "../assets/images/foxlogo.svg";
import { Link, useLocation } from "react-router-dom";

export default function AppNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "My Learning", path: "/mylearning" },
    { name: "Assignments", path: "/assignments" },
    { name: "Progress", path: "/progress" },
    { name: "Resources", path: "/resources" },
    { name: "Community", path: "/community" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white px-6 py-3">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={foxLogo} alt="Fox Academy Logo" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-[#F38821]">
            Fox <span className="text-[#F38821]">Academy</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#F38821] ${
                currentPath === link.path || (link.name === "My Learning" && currentPath === "/mylearning")
                  ? "border-b-2 border-[#F38821] pb-1 text-[#F38821]"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          <button className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
          </button>
          
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#F38821] focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
          >
            <img 
              src={amara} 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </button>

          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-[120%] right-0 w-[280px] bg-[#FAFAFA] rounded-3xl shadow-xl border border-gray-100 overflow-hidden z-50 p-6 flex flex-col font-sans">
              
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img src={amara} alt="Amara Okoro" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-gray-900 text-[17px] leading-tight">Amara Okoro</h3>
                  <p className="text-gray-500 text-sm">Amara@email.com</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-6 text-xs font-semibold">
                <span className="bg-indigo-50 text-indigo-900 px-3 py-1 rounded-lg">
                  UI/UX Design
                </span>
                <span className="bg-[#F38821] text-white px-3 py-1 rounded-lg">
                  cohort 3
                </span>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-2">
                  <span>Phase 1 Progress</span>
                  <span className="text-gray-700 text-sm font-semibold tracking-normal">18%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-indigo-50 overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '18%' }} />
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4 text-[17px] font-medium text-slate-700">
                <Link to="/profile-details" className="hover:text-indigo-600 transition-colors">Profile</Link>
                <Link to="/progress" className="hover:text-indigo-600 transition-colors">My progress</Link>
                <Link to="/certifications" className="hover:text-indigo-600 transition-colors">Certificate & Badges</Link>
                <Link to="/settings" className="hover:text-indigo-600 transition-colors">Settings</Link>
                <Link to="#" className="hover:text-indigo-600 transition-colors">Help center</Link>
                <Link to="/" className="text-red-700 hover:text-red-800 transition-colors mt-2">Logout</Link>
              </div>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
