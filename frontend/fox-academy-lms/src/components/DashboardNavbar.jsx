import { Bell } from "lucide-react";
import amara from "../assets/images/amara.jpg";
import { Link, useLocation } from "react-router-dom";

export default function DashboardNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "My Learning", path: "/learning" },
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
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#F38821]">
            <span className="text-sm font-bold text-white">F</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#111827]">
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
                currentPath === link.path || (link.name === "My Learning" && currentPath === "/dashboard")
                  ? "border-b-2 border-[#F38821] pb-1 text-[#F38821]"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
          </button>
          
          <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-200">
            <img 
              src={amara} 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
