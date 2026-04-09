import React from 'react';
import { Link } from 'react-router-dom';
import { User, BarChart2, Award, Settings, HelpCircle, LogOut } from 'lucide-react';
import amaraImg from '../assets/images/amara.jpg';

export default function ProfileDropdown({ onClose }) {
  const menuItems = [
    { icon: User, label: 'Profile', to: '/profile' },
    { icon: BarChart2, label: 'My progress', to: '/progress' },
    { icon: Award, label: 'Certificate & Badges', to: '/certificates' },
    { icon: Settings, label: 'Settings', to: '/settings' },
    { icon: HelpCircle, label: 'Help center', to: '#help' },
  ];

  return (
    <div className="absolute right-0 mt-2 w-[280px] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 z-50 overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col items-center pt-6 pb-4 px-5 border-b border-[#F3F4F6]">
        <img
          src={amaraImg}
          alt="Amara Okoro"
          className="w-[72px] h-[72px] rounded-full object-cover border-[3px] border-[#F38821] mb-2"
        />
        <h3 className="text-base font-bold text-[#111827] leading-tight">Amara Okoro</h3>
        <p className="text-xs text-[#6B7280] mt-0.5">Amara@email.com</p>

        {/* Tags */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[11px] font-medium text-[#6B7280] bg-[#F3F4F6] px-2.5 py-1 rounded-full">
            UI/UX Design
          </span>
          <span className="text-[11px] font-semibold text-white bg-[#F38821] px-2.5 py-1 rounded-full">
            cohort 3
          </span>
        </div>

        {/* Phase Progress */}
        <div className="w-full mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280]">
              Phase 1 Progress
            </span>
            <span className="text-[11px] font-bold text-[#111827]">18%</span>
          </div>
          <div className="w-full h-[6px] bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: '18%',
                background: 'linear-gradient(90deg, #6366F1, #818CF8)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {menuItems.map(({ icon: Icon, label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={onClose}
            className="flex items-center gap-3 px-5 py-2.5 text-sm text-[#374151] hover:bg-[#F9FAFB] hover:text-[#F38821] transition-colors"
          >
            <Icon className="h-[18px] w-[18px] text-[#9CA3AF]" />
            {label}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="border-t border-[#F3F4F6] py-2">
        <Link
          to="/login"
          onClick={onClose}
          className="flex items-center gap-3 px-5 py-2.5 text-sm text-[#EF4444] hover:bg-red-50 transition-colors"
        >
          <LogOut className="h-[18px] w-[18px]" />
          Logout
        </Link>
      </div>
    </div>
  );
}
