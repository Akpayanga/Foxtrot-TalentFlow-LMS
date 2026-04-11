import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import amara from "../assets/images/amara.jpg";

// Toggle Switch Component - extracted to avoid recreation on render
const ToggleSwitch = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className={`relative h-6 w-11 rounded-full transition-colors ${
      checked ? "bg-[#4CAF50]" : "bg-[#D1D5DB]"
    }`}
  >
    <div
      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${
        checked ? "translate-x-5" : "translate-x-1"
      }`}
    />
  </button>
);

export default function Settings() {
  const [notifications, setNotifications] = useState({
    assignmentUpdates: true,
    mentorFeedback: true,
    communityReplies: false,
    teamActivity: true,
    sessionReminders: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    progressVisibility: false,
  });

  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const togglePrivacy = (key) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-[#111827]">Settings</h1>
          <p className="text-[#6B7280]">
            Manage your account, preferences, and privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* Left Column: Main Settings */}
          <div className="space-y-8">
            {/* Profile Settings */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Profile Settings
                </h2>
                <button className="text-sm font-medium text-[#4F46E5] hover:text-[#4338CA]">
                  Edit +
                </button>
              </div>

              {/* User Card */}
              <div className="rounded-lg bg-[#F38821] p-6 text-white">
                <div className="flex items-center gap-4">
                  <img
                    src={amara}
                    alt="Profile"
                    className="h-16 w-16 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Amara Obi</h3>
                    <p className="text-sm opacity-90">UX Design #</p>
                    <p className="text-sm opacity-90">Cohort 3 ≡</p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    defaultValue="Amara Obi"
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-[#111827] focus:border-[#F38821] focus:outline-none"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">
                    BIO
                  </label>
                  <textarea
                    defaultValue="UX Design enthusiast with a passion for academic interfaces..."
                    rows="3"
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-[#111827] focus:border-[#F38821] focus:outline-none"
                  />
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">
                    LINKEDIN
                  </label>
                  <input
                    type="text"
                    defaultValue="linkedin.com/in/amaraobi"
                    className="w-full rounded-lg border border-[#E5E7EB] px-4 py-3 text-[#111827] focus:border-[#F38821] focus:outline-none"
                  />
                </div>
              </div>

              {/* Edit Profile Button */}
              <button className="rounded-lg bg-[#F38821] px-6 py-2.5 font-medium text-white hover:bg-[#D97706] transition-colors">
                Edit Profile
              </button>
            </section>

            {/* Account & Security */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Account & Security
                </h2>
                <Link
                  to="/settings/account-security"
                  className="flex items-center gap-2 text-sm font-medium text-[#4F46E5] hover:text-[#4338CA]"
                >
                  Manage <ChevronRight size={16} />
                </Link>
              </div>

              <Link to="/settings/account-security" className="block space-y-3 rounded-lg border border-[#E5E7EB] p-6 hover:opacity-80 transition-opacity cursor-pointer">
                <div>
                  <label className="block text-xs font-medium text-[#6B7280]">
                    EMAIL
                  </label>
                  <p className="mt-1 text-[#111827]">amaraobi@gmail.com</p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#6B7280]">
                    PASSWORD
                  </label>
                  <p className="mt-1 text-[#111827]">••••••••••</p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#6B7280]">
                    ACTIVE SESSIONS
                  </label>
                  <p className="mt-1 text-[#111827]">2 Devices (Lagos, Nigeria)</p>
                </div>
              </Link>

              <button className="text-sm font-medium text-red-600 hover:text-red-700">
                Delete Account
              </button>
            </section>

            {/* Notifications */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Notifications
                </h2>
                <Link
                  to="/notifications"
                  className="flex items-center gap-2 text-sm font-medium text-[#4F46E5] hover:text-[#4338CA]"
                >
                  Manage <ChevronRight size={16} />
                </Link>
              </div>

              <Link to="/notifications" className="block space-y-4 cursor-pointer hover:opacity-80 transition-opacity">
                {[
                  {
                    key: "assignmentUpdates",
                    label: "Assignment Updates",
                  },
                  {
                    key: "mentorFeedback",
                    label: "Mentor Feedback",
                  },
                  {
                    key: "communityReplies",
                    label: "Community Replies",
                  },
                  {
                    key: "teamActivity",
                    label: "Team Activity",
                  },
                  {
                    key: "sessionReminders",
                    label: "Session Reminders",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between pointer-events-none"
                  >
                    <span className="text-[#111827]">{item.label}</span>
                    <ToggleSwitch
                      checked={notifications[item.key]}
                      onChange={() => {}}
                    />
                  </div>
                ))}
              </Link>
            </section>

            {/* Privacy */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Privacy
                </h2>
                <button className="flex items-center gap-2 text-sm font-medium text-[#4F46E5] hover:text-[#4338CA]">
                  Manage <ChevronRight size={16} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#111827]">Profile Visibility</p>
                    <p className="text-sm text-[#6B7280]">
                      Allow others to find you in the community
                    </p>
                  </div>
                  <ToggleSwitch
                    checked={privacy.profileVisibility}
                    onChange={() => togglePrivacy("profileVisibility")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#111827]">Progress Visibility</p>
                    <p className="text-sm text-[#6B7280]">
                      Share your assignment scores with the community
                    </p>
                  </div>
                  <ToggleSwitch
                    checked={privacy.progressVisibility}
                    onChange={() => togglePrivacy("progressVisibility")}
                  />
                </div>
              </div>
            </section>

            {/* Appearance */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-[#111827]">Appearance</h2>

              <div className="space-y-6">
                {/* Theme Selection */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-[#374151]">
                    THEME SELECTION
                  </label>
                  <div className="flex gap-4">
                    {["Light", "Dark"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t.toLowerCase())}
                        className={`rounded-lg px-6 py-2 font-medium transition-colors ${
                          theme === t.toLowerCase()
                            ? "bg-[#F38821] text-white"
                            : "border border-[#E5E7EB] text-[#111827] hover:border-[#F38821]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-[#374151]">
                    FONT SIZE
                  </label>
                  <div className="flex gap-4">
                    {["Small", "Medium", "Large"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setFontSize(size.toLowerCase())}
                        className={`rounded-lg px-6 py-2 font-medium transition-colors ${
                          fontSize === size.toLowerCase()
                            ? "bg-[#F38821] text-white"
                            : "border border-[#E5E7EB] text-[#111827] hover:border-[#F38821]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Connected Apps */}
            <section className="space-y-4 pb-8">
              <h2 className="text-lg font-semibold text-[#111827]">
                Connected Apps
              </h2>

              <div className="space-y-3">
                {[
                  { name: "Figma", status: "CONNECTED", connected: true },
                  { name: "Notion", status: "CONNECT", connected: false },
                  {
                    name: "Google Drive",
                    status: "CONNECTED",
                    connected: true,
                  },
                ].map((app) => (
                  <div
                    key={app.name}
                    className="flex items-center justify-between rounded-lg border border-[#E5E7EB] p-4"
                  >
                    <span className="font-medium text-[#111827]">{app.name}</span>
                    <button
                      className={`text-sm font-medium ${
                        app.connected
                          ? "text-[#4CAF50]"
                          : "text-[#4F46E5] hover:text-[#4338CA]"
                      }`}
                    >
                      {app.status}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            {/* Profile Summary */}
            <div className="space-y-4 rounded-lg border border-[#E5E7EB] p-6">
              <h3 className="text-xs font-semibold uppercase text-[#6B7280]">
                Your Account
              </h3>

              <Link to="/profile-details" className="flex flex-col items-center text-center hover:opacity-80 transition-opacity cursor-pointer">
                <img
                  src={amara}
                  alt="Profile"
                  className="mb-3 h-20 w-20 rounded-full border-2 border-[#F38821] object-cover"
                />
                <h4 className="font-semibold text-[#111827]">Amara Obi</h4>
                <p className="text-xs text-[#F38821]">UX Design Intern</p>
              </Link>

              <div className="space-y-2 border-t border-[#E5E7EB] pt-4">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-[#6B7280]">
                    COHORT
                  </span>
                  <span className="text-sm font-medium text-[#111827]">
                    Cohort 3
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-[#6B7280]">
                    ENROLLED
                  </span>
                  <span className="text-sm font-medium text-[#111827]">
                    February 2026
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-[#6B7280]">
                    STATUS
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                    <span className="text-sm font-medium text-[#111827]">
                      Active
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 rounded-lg border border-[#E5E7EB] p-6">
              <h3 className="text-xs font-semibold uppercase text-[#6B7280]">
                Quick Links
              </h3>
              <nav className="space-y-2">
                {[
                  { name: "Help Center", icon: "?" },
                  { name: "Contact Support", icon: "?" },
                  { name: "Privacy Policy", icon: "?" },
                  { name: "Terms of Service", icon: "?" },
                ].map((link) => (
                  <button
                    key={link.name}
                    className="flex items-center gap-3 rounded-lg p-2 text-left hover:bg-[#FEF3E9]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F38821] text-xs font-bold text-white">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium text-[#111827]">
                      {link.name}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Admin Note */}
            <div className="rounded-lg bg-[#F38821] p-6 text-white">
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#F38821] text-xs font-bold">
                  !
                </span>
                ADMIN NOTE
              </h3>
              <p className="mb-4 text-sm leading-relaxed">
                Cohort 3 practicum will be archived on June 10th. Please download all resources before the cohort ends.
              </p>
              <button className="w-full rounded-lg border-2 border-white bg-transparent py-2 font-medium text-white hover:bg-white hover:text-[#F38821] transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
