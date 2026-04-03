import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChannelSidebar from "./ChannelSidebar";
import CreatePostSidebar from "./CreatePostSidebar";

const StartDiscussion = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const labelClass =
    "block text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[1px] mb-3";

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans">
      <div className="flex flex-1 w-full max-w-[1280px] mx-auto overflow-hidden">
        {/* 1. LEFT SIDEBAR */}
        <aside className="hidden lg:block w-[256px] border-r border-gray-100 min-h-screen z-10">
          <ChannelSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </aside>

        {/* 2. MAIN FORM AREA */}
        <main className="flex-1 lg:max-w-[736px] bg-white min-h-screen overflow-y-auto p-6 md:p-10">
          {/* Back Button */}
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors mb-8"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to # ux-design
          </Link>

          {/* Header */}
          <h1 className="text-[32px] font-black text-gray-900 tracking-tight mb-4">
            Start a Discussion
          </h1>
          <div className="inline-block bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-lg mb-10 tracking-wide">
            Posting in # ux-design • UX Design Channel
          </div>

          {/* Form */}
          <form className="flex flex-col max-w-[600px]">
            {/* Title Input */}
            <div className="mb-8">
              <label className={labelClass}>Discussion Title</label>
              <input
                type="text"
                placeholder="Give your discussion a clear, specific title..."
                className="w-full bg-[#F9F9F9] border border-gray-100 rounded-2xl px-5 py-4 text-[13px] font-medium text-gray-900 focus:outline-none focus:border-gray-300 focus:bg-white transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Rich Text Editor Area */}
            <div className="mb-8">
              <label className={labelClass}>What's on your mind?</label>
              <div className="border border-gray-100 rounded-2xl overflow-hidden bg-[#F9F9F9]">
                {/* Editor Toolbar */}
                <div className="bg-white border-b border-gray-100 px-4 py-3 flex gap-4 text-gray-400">
                  <button
                    type="button"
                    className="hover:text-black transition-colors font-serif font-bold"
                  >
                    B
                  </button>
                  <button
                    type="button"
                    className="hover:text-black transition-colors font-serif italic"
                  >
                    I
                  </button>
                  <button
                    type="button"
                    className="hover:text-black transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hover:text-black transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </button>
                </div>
                {/* Textarea */}
                <textarea
                  placeholder="Ask a question, share a resource..."
                  className="w-full bg-transparent h-40 p-5 text-[13px] font-medium outline-none resize-none placeholder:text-gray-400"
                ></textarea>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <label className={labelClass}>Tag (Optional)</label>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="bg-black text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-wide"
                >
                  Wireframing
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-[10px] font-bold tracking-wide hover:border-gray-400 transition-colors"
                >
                  User Research
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-[10px] font-bold tracking-wide hover:border-gray-400 transition-colors"
                >
                  Feedback
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-[10px] font-bold tracking-wide hover:border-gray-400 transition-colors"
                >
                  Career
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-[10px] font-bold tracking-wide hover:border-gray-400 transition-colors"
                >
                  Tools
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-10">
              <label className={labelClass}>Attach a file (Optional)</label>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors bg-[#F9F9F9]/50">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#A1A1AA"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="mb-3"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                <span className="text-xs font-bold text-gray-600 mb-1">
                  Drag and drop or click to upload
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  PDF, JPG, PNG, MP4 UP TO 10MB
                </span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 pt-6 border-t border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-4 h-4 bg-black rounded flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-gray-600">
                  Notify me when someone replies
                </span>
              </label>

              <div className="flex items-center gap-6">
                <Link
                  to="/community"
                  className="text-[11px] font-bold text-gray-500 hover:text-black transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  className="bg-black text-white px-6 py-3 rounded-full text-[11px] font-bold shadow-lg hover:bg-gray-800 transition-all"
                >
                  Post Discussion
                </button>
              </div>
            </div>
          </form>
        </main>

        {/* 3. RIGHT SIDEBAR (Tips) */}
        <CreatePostSidebar />
      </div>
    </div>
  );
};

export default StartDiscussion;
