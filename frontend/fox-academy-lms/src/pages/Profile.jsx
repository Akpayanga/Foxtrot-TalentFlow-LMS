import React, { useState } from 'react';
import { Link2, Pencil, Lock } from 'lucide-react';
import AppNavbar from '../components/AppNavbar';
import amaraImg from '../assets/images/amara.jpg';

export default function Profile() {
  const [aboutMe, setAboutMe] = useState(
    'Aspiring product designer with a passion for UI/UX. Constantly learning new skills to create....'
  );
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const [form, setForm] = useState({
    fullName: 'Amara Okoro',
    email: 'amara@example.com',
    phone: '+234 000 000 0000',
    discipline: 'UI/UX Design',
    expertiseLevel: 'Intermediate',
    portfolioUrl: 'https://yourportfolio.com',
    githubLinkedin: 'https://linkedin.com/amara',
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827]">
      <AppNavbar />

      <main className="mx-auto w-full max-w-[1280px] px-5 py-8 md:px-10 flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="flex flex-col gap-4 w-full md:w-[320px] shrink-0">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col items-center text-center gap-4">
            <div className="relative">
              <img
                src={amaraImg}
                alt="Amara Okoro"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#F38821]"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#111827]">Amara Okoro</h2>
              <p className="text-sm text-[#6B7280]">UI/UX design interns</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 border border-[#F38821] text-[#F38821] rounded-lg py-2.5 text-sm font-medium hover:bg-orange-50 transition-colors">
              <Link2 className="h-4 w-4" />
              Share profile link
            </button>
            <button className="text-[#3B82F6] text-sm hover:underline">Edit profile</button>
          </div>

          {/* Desired Roles Card */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-base font-bold text-[#111827]">Desired Roles</h3>
              <Pencil className="h-4 w-4 text-[#3B82F6]" />
            </div>
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2">Position</p>
            <div className="flex items-center gap-2 text-sm text-[#374151]">
              <Lock className="h-4 w-4 text-[#9CA3AF]" />
              UI/UX Design Intern
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <h3 className="text-base font-bold text-[#111827] mb-1">Additional Info</h3>
            <p className="text-xs text-[#6B7280] mb-4">
              Let your peers knows what makes you a great designer, Add your linkedin and Github link
            </p>
            <button className="w-full flex items-center justify-center gap-2 border border-[#F38821] text-[#F38821] rounded-lg py-2.5 text-sm font-medium hover:bg-orange-50 transition-colors">
              + Add additional info
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* About Me */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#111827]">About Me</h3>
              <button
                onClick={() => setIsEditingAbout(!isEditingAbout)}
                className="flex items-center gap-1.5 bg-[#F38821] text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-[#e07818] transition-colors"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </button>
            </div>
            {isEditingAbout ? (
              <div className="flex flex-col gap-2">
                <textarea
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  className="w-full h-32 border border-[#D1D5DB] rounded-lg p-3 text-sm text-[#374151] resize-none focus:outline-none focus:ring-2 focus:ring-[#F38821]"
                />
                <button
                  onClick={() => setIsEditingAbout(false)}
                  className="self-end bg-[#F38821] text-white text-xs font-medium px-4 py-1.5 rounded-lg hover:bg-[#e07818] transition-colors"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="border border-[#E5E7EB] rounded-lg p-4 min-h-[100px] text-sm text-[#374151]">
                {aboutMe}
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <h3 className="text-base font-bold text-[#111827] mb-4">Basic Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleFormChange}
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">Primary Discipline</label>
                <div className="relative">
                  <select
                    name="discipline"
                    value={form.discipline}
                    onChange={handleFormChange}
                    className="w-full appearance-none border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821] bg-white pr-8"
                  >
                    <option>UI/UX Design</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>Product Management</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]">▾</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Level */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <h3 className="text-base font-bold text-[#111827] mb-4">Expertise Level</h3>
            <div className="relative">
              <select
                name="expertiseLevel"
                value={form.expertiseLevel}
                onChange={handleFormChange}
                className="w-full appearance-none border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821] bg-white pr-8"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]">▾</span>
            </div>
          </div>

          {/* Link */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <h3 className="text-base font-bold text-[#111827] mb-4">Link</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">Portfolio URL</label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={form.portfolioUrl}
                  onChange={handleFormChange}
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">Github / LinkedIn</label>
                <input
                  type="url"
                  name="githubLinkedin"
                  value={form.githubLinkedin}
                  onChange={handleFormChange}
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F38821]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] mt-8">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 py-4 flex justify-end gap-6">
          <a href="#" className="text-xs text-[#6B7280] hover:text-[#111827] uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-xs text-[#6B7280] hover:text-[#111827] uppercase tracking-widest">Terms</a>
          <a href="#" className="text-xs text-[#6B7280] hover:text-[#111827] uppercase tracking-widest">Support</a>
        </div>
      </footer>
    </div>
  );
}
