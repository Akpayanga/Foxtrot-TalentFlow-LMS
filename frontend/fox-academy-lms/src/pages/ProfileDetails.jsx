import React, { useState } from "react";
import AppNavbar from "../components/AppNavbar";
import amara from "../assets/images/amara.jpg";
import { Link } from "react-router-dom";

export default function ProfileDetails() {
  const [profileData, setProfileData] = useState({
    aboutMe: "Aspiring product designer with a passion for UI/UX. Constantly learning new skills to create.....",
    fullName: "Amara Okoro",
    emailAddress: "amara@example.com",
    phoneNumber: "+234 000 000 0000",
    primaryDiscipline: "UI/UX Design",
    expertiseLevel: "Intermediate",
    portfolioUrl: "https://yourportfolio.com",
    githubLinkedin: "https://linkedin.com/amara"
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pb-20">
      <AppNavbar />

      <main className="max-w-[1216px] mx-auto p-4 md:p-8 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Profile Avatar Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-xs">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5">
                <img src={amara} alt="Amara Okoro" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">Amara Okoro</h2>
              <p className="text-sm text-gray-500 mb-6">UI/UX design interns</p>
              
              <button className="w-full flex items-center justify-center gap-2 border border-orange-200 text-[#F38821] rounded-lg py-2.5 font-semibold text-sm mb-4 hover:bg-orange-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Share profile link
              </button>
              
              <Link to="#" className="text-xs text-[#3341C1] font-semibold hover:underline">
                Edit profile
              </Link>
            </div>

            {/* Desired Roles Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-gray-900">Desired Roles</h3>
                <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-2">Position</p>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>UI/UX Design Intern</span>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Additional Info</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Let your peers knows what makes you a great designer, Add your linkedin and Github link
              </p>
              <button className="w-full flex items-center justify-center gap-2 border border-orange-200 text-[#F38821] rounded-lg py-2.5 font-semibold text-sm hover:bg-orange-50 transition-colors">
                <span className="text-lg leading-none mb-0.5">+</span> Add additional info
              </button>
            </div>
            
          </div>

          {/* RIGHT COLUMN - 8 cols */}
          <div className="lg:col-span-8 bg-transparent">
            
            {/* About Me */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-[15px] font-bold text-gray-900">About Me</h3>
                <button className="bg-[#F38821] text-white px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-orange-600 transition-colors shadow-sm">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  Edit
                </button>
              </div>
              <textarea 
                name="aboutMe"
                value={profileData.aboutMe}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-4 text-[13px] text-gray-700 h-32 resize-none focus:outline-none focus:border-[#F38821] focus:ring-1 focus:ring-orange-100 bg-white"
              />
            </div>

            {/* Basic Info */}
            <div className="mb-8">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Basic Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">FULL NAME</label>
                  <input 
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">EMAIL ADDRESS</label>
                  <input 
                    name="emailAddress"
                    value={profileData.emailAddress}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">PHONE NUMBER</label>
                  <input 
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">PRIMARY DISCIPLINE</label>
                  <div className="relative">
                    <select 
                      name="primaryDiscipline"
                      value={profileData.primaryDiscipline}
                      onChange={handleChange}
                      className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821] bg-white bg-none"
                    >
                      <option>UI/UX Design</option>
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                    </select>
                    <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Level */}
            <div className="mb-8">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Expertise Level</h3>
              <div className="relative w-full max-w-full">
                <select 
                  name="expertiseLevel"
                  value={profileData.expertiseLevel}
                  onChange={handleChange}
                  className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821] bg-white bg-none"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Link */}
            <div className="mb-16">
              <h3 className="text-[15px] font-bold text-gray-900 mb-4">Link</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">PORTFOLIO URL</label>
                  <input 
                    name="portfolioUrl"
                    value={profileData.portfolioUrl}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">GITHUB / LINKEDIN</label>
                  <input 
                    name="githubLinkedin"
                    value={profileData.githubLinkedin}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-700 focus:outline-none focus:border-[#F38821]" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex justify-end gap-8 pb-10">
          {["PRIVACY", "TERMS", "SUPPORT"].map((link) => (
            <button key={link} className="text-[10px] font-bold tracking-widest text-gray-400 hover:text-gray-600 transition-colors">
              {link}
            </button>
          ))}
        </footer>
      </main>
    </div>
  );
}
