import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronRight, CheckCircle2, Check } from "lucide-react";
import foxLogo from "../../assets/images/foxlogo.svg";
import amara from "../../assets/images/amara.jpg"; // Placeholder avatar

export default function AddMentor() {
  const [accessLevel, setAccessLevel] = useState("mentor");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-16">
      {/* Navbar area */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={foxLogo} alt="Fox Academy Logo" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-[#D97706]">
                Fox Academy
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#111827] uppercase mt-1">
                Global Admin
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
            <Link
              to="/control-room/dashboard"
              className="hover:text-gray-800 pb-1 border-b-2 border-transparent"
            >
              Dashboard
            </Link>
            <Link
              to="/control-room/mentors"
              className="text-[#D97706] border-b-2 border-[#D97706] pb-1"
            >
              Mentors
            </Link>
            <Link to="/control-room/interns" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">Interns</Link>
            <Link to="/control-room/cohorts" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">Cohorts</Link>
            <Link to="/control-room/analytics" className="hover:text-gray-800 pb-1 border-b-2 border-transparent">Analytics</Link>
          </div>

          {/* Profile Segment */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-black">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#111827] leading-tight">
                  Bola Aseyan
                </p>
                <p className="text-[10px] font-bold text-[#4F46E5] uppercase tracking-widest leading-tight">
                  Global Admin
                </p>
              </div>
              <img
                src={amara}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border border-gray-200"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content View */}
      <main className="mx-auto max-w-[800px] px-6 pt-10">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#6B3F22] mb-1 tracking-tight">
            Add New Mentor
          </h1>
          <p className="text-[15px] text-gray-600 font-medium">
            Manually add a new mentor into the Fox Academy cohort
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-[17px] font-bold text-[#111827] mb-1">Add New Mentor</h2>
              <p className="text-[13px] text-gray-500">
                Fill in the mentor's details below. They will receive an email invitation with instructions to activate their account.
              </p>
            </div>
            
            <hr className="border-gray-100 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7 mb-8">
              {/* Full Name */}
              <div>
                <label className="block text-[13px] font-bold text-[#111827] mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dr. Funke Adeyemi" 
                  className="w-full border border-gray-200 rounded-md p-3 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] placeholder-gray-400"
                />
              </div>
              
              {/* Discipline */}
              <div className="relative">
                <label className="block text-[13px] font-bold text-[#111827] mb-2">Discipline</label>
                <select className="w-full border border-gray-200 rounded-md p-3 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] bg-white appearance-none text-gray-600">
                  <option>Select discipline</option>
                  <option>Data Analysis</option>
                  <option>Design / UX</option>
                  <option>Engineering</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 top-7 flex items-center px-4 text-gray-400">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[13px] font-bold text-[#111827] mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. funke@foxacademy.com" 
                  className="w-full border border-gray-200 rounded-md p-3 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] placeholder-gray-400"
                />
              </div>
              
              {/* Role Title */}
              <div>
                <label className="block text-[13px] font-bold text-[#111827] mb-2">Role Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Senior UX Mentor" 
                  className="w-full border border-gray-200 rounded-md p-3 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] placeholder-gray-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[13px] font-bold text-[#111827] mb-2">Phone Number (Optional)</label>
                <input 
                  type="text" 
                  placeholder="+234 800 000 0000" 
                  className="w-full border border-gray-200 rounded-md p-3 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] placeholder-gray-400"
                />
              </div>
              
              {/* Cohort Assignment */}
              <div className="relative">
                <label className="block text-[13px] font-bold text-[#111827] mb-2">Cohort Assignment</label>
                <select className="w-full border border-gray-200 rounded-md p-3 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#D97706] focus:border-[#D97706] bg-white appearance-none text-gray-600">
                  <option>Select cohort</option>
                  <option>Cohort 1 (2024)</option>
                  <option>Cohort 2 (2024)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 top-7 flex items-center px-4 text-gray-400">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>

            {/* Access Level */}
            <div className="mb-2">
              <label className="block text-[13px] font-bold text-[#111827] mb-4">Access Level</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mentor Role Card */}
                <div 
                  className={`border rounded-lg p-5 cursor-pointer relative transition-colors ${
                    accessLevel === 'mentor' ? 'border-[#D97706] bg-white ring-1 ring-[#D97706]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setAccessLevel('mentor')}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#111827] text-sm tracking-wide">Mentor</h3>
                    {accessLevel === 'mentor' ? (
                      <CheckCircle2 className="text-[#4CAF50] fill-white" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                    )}
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                    Can manage assigned interns, grade assignments, give feedback, and book sessions.
                  </p>
                </div>

                {/* Senior Mentor Role Card */}
                <div 
                  className={`border rounded-lg p-5 cursor-pointer relative transition-colors ${
                    accessLevel === 'senior' ? 'border-[#D97706] bg-white ring-1 ring-[#D97706]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setAccessLevel('senior')}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#111827] text-sm tracking-wide">Senior Mentor</h3>
                    {accessLevel === 'senior' ? (
                      <CheckCircle2 className="text-[#4CAF50] fill-white" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                    )}
                  </div>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                    All Mentor permissions plus ability to post announcements and manage shared resources across disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Actions Area */}
          <div className="bg-[#FAF9F6] px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100">
             <div className="flex items-center gap-3 w-full md:w-auto">
                <input 
                  type="checkbox" 
                  id="send-email" 
                  className="h-[18px] w-[18px] rounded border-gray-300 text-[#D97706] focus:ring-[#D97706] accent-[#D97706]"
                  defaultChecked
                />
                <label htmlFor="send-email" className="text-[13px] font-medium text-gray-700">
                  Send welcome email with activation link immediately
                </label>
             </div>
             <div className="flex items-center gap-3 w-full md:w-auto self-end">
                <Link to="/control-room/mentors" className="flex-1 md:flex-none border border-orange-200 text-[#D97706] px-8 py-2.5 rounded-md text-sm font-bold text-center hover:bg-orange-50 transition">
                  Cancel
                </Link>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  className="flex-1 md:flex-none bg-[#D97706] text-white px-8 py-2.5 rounded-md text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#B45309] transition"
                >
                  Send Invite <ChevronRight size={16} />
                </button>
             </div>
          </div>

        </div>
      </main>

      {/* Success Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[500px] p-8 flex flex-col items-center text-center relative mx-4 mt-8">
            {/* Orange Icon Box */}
            <div className="bg-[#D97706] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Check className="text-white" size={32} strokeWidth={2.5} />
            </div>

            <div className="mt-8 w-full">
              <h2 className="text-2xl font-bold text-[#111827] mb-2 tracking-tight">
                Invite Sent Successfully!
              </h2>
              <p className="text-sm text-[#111827] mb-8">
                An invitation email has been sent to:<br />
                <strong className="font-bold">funke.adeyemi@email.com</strong>
              </p>
            </div>

            {/* Details Box */}
            <div className="border border-gray-100 rounded-lg p-6 w-full text-left mb-6">
              <div className="grid grid-cols-2 gap-y-7 gap-x-4">
                <div>
                  <p className="text-[10px] font-bold text-[#111827] mb-1.5 uppercase tracking-wide">Name</p>
                  <p className="text-[13px] font-bold text-[#111827]">Dr. Funke Adeyemi</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#111827] mb-1.5 uppercase tracking-wide">Discipline</p>
                  <p className="text-[13px] font-bold text-[#111827]">UX Design</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#111827] mb-1.5 uppercase tracking-wide">Role</p>
                  <p className="text-[13px] font-bold text-[#111827]">Senior UX Mentor</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#111827] mb-1.5 uppercase tracking-wide">Cohort</p>
                  <p className="text-[13px] font-bold text-[#111827]">Cohort 3</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#111827] mb-1.5 uppercase tracking-wide">Access Level</p>
                  <p className="text-[13px] font-bold text-[#111827]">Mentor</p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mb-8 leading-relaxed max-w-[360px] mx-auto">
              Dr. Adeyemi will receive an email with a link to activate their account and set their password. Their account will appear as Pending until they complete activation.
            </p>

            {/* Action Buttons */}
            <div className="flex w-full gap-4">
              <Link
                to="/control-room/mentors"
                className="border border-[#D97706] text-[#D97706] py-3 rounded-md text-[13px] font-bold flex-1 flex items-center justify-center gap-1 hover:bg-[#FFF8EE] transition"
              >
                Back to Mentor List <ChevronRight size={16} />
              </Link>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#D97706] text-white py-3 rounded-md text-[13px] font-bold flex-1 flex items-center justify-center gap-1 hover:bg-[#B45309] transition"
              >
                Add Another Mentor <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
