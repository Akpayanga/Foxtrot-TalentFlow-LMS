import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import funke from "../assets/images/funke.jpg";

export default function SubmitDeliverable() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isBriefOpen, setIsBriefOpen] = useState(true);
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [checklist, setChecklist] = useState({
    aligned: false,
    publicLinks: false,
    cited: false,
    original: false,
  });

  const toggleCheck = (key) =>
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <AppNavbar />

      <main className="max-w-[1216px] mx-auto p-4 md:p-8 mt-4">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/my-work-board')}
          className="text-[13px] font-medium text-gray-500 flex items-center gap-2 mb-6 hover:text-[#F38821] transition-colors"
        >
          <span className="text-base">←</span> Back to My Workspace
        </button>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN - 8 cols */}
          <div className="lg:col-span-8">
            {/* Page Title */}
            <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900 tracking-tight mb-1">
              Submit: UX Research Report
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Track: Phase 2 Foundations &nbsp;·&nbsp; Due: Oct 24, 2024 &nbsp;·
            </p>

            {/* Deliverable Brief */}
            <div className="bg-white border border-gray-200 rounded-2xl mb-8">
              <button
                onClick={() => setIsBriefOpen(!isBriefOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h2 className="text-[15px] font-bold text-gray-900">
                  Deliverable Brief
                </h2>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${isBriefOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isBriefOpen && (
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-[13.5px] text-gray-600 leading-relaxed mb-6">
                    Present your synthesis of user interviews and competitive
                    analysis. Focus on the core friction points identified during
                    the empathy phase. Your report should be structured for
                    stakeholder presentation.
                  </p>

                  {/* Requirements Checklist */}
                  <div className="bg-[#FFF8F0] border border-[#F3882133] rounded-xl p-5">
                    <h3 className="text-[13px] font-bold text-gray-900 mb-4">
                      Requirements Checklist
                    </h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-[18px] h-[18px] text-[#22C55E] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[13px] text-gray-700">
                          User Persona Summaries (at least 3)
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-[18px] h-[18px] text-[#22C55E] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[13px] text-gray-700">
                          Competitive Matrix
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg
                          className="w-[18px] h-[18px] text-[#22C55E] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[13px] text-gray-700">
                          Affinity Map Documentation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Upload Your Work */}
            <div className="mb-8">
              <h2 className="text-[15px] font-bold text-gray-900 mb-4">
                Upload Your Work
              </h2>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl flex flex-col items-center justify-center py-14 px-6 cursor-pointer transition-colors ${
                  isDragging
                    ? "border-[#F38821] bg-orange-50/40"
                    : uploadedFile
                      ? "border-green-300 bg-green-50/30"
                      : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.zip"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                {uploadedFile ? (
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-8 h-8 text-[#22C55E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm font-semibold text-gray-800">
                      {uploadedFile.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Document Icon */}
                    <svg
                      className="w-10 h-10 text-gray-300 mb-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Drag and drop your file here
                    </p>
                    <p className="text-sm text-gray-400">
                      or{" "}
                      <span className="text-[#F38821] underline font-medium">
                        click to browse
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-3">
                      Maximum file size: 25MB (PDF, DOCX, ZIP)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Or Paste a Link */}
            <div className="mb-8">
              <h2 className="text-[15px] font-bold text-[#F38821] mb-3">
                Or Paste a Link
              </h2>
              <input
                type="url"
                placeholder="https://www.figma.com/file/..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]/20 transition bg-white"
              />
            </div>

            {/* Submission Notes */}
            <div className="mb-8">
              <h2 className="text-[15px] font-bold text-[#F38821] mb-3">
                Submission Notes
              </h2>
              <textarea
                placeholder="Add a Note (Optional)"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 outline-none focus:border-[#F38821] focus:ring-1 focus:ring-[#F38821]/20 transition resize-none bg-white"
              />
            </div>

            {/* Before You Submit */}
            <div className="bg-[#FFF8F0] border border-[#F3882133] rounded-xl p-6 mb-10">
              <div className="flex items-center gap-2 mb-5">
                <svg
                  className="w-5 h-5 text-[#F38821]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <h3 className="text-[14px] font-bold text-gray-900 uppercase tracking-wide">
                  Before You Submit
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checklist.aligned}
                    onChange={() => toggleCheck("aligned")}
                    className="w-4 h-4 rounded border-gray-300 text-[#F38821] focus:ring-[#F38821] accent-[#F38821] cursor-pointer"
                  />
                  <span className="text-[12.5px] text-gray-600 group-hover:text-gray-800 transition">
                    Submission is 100% aligned with the deliverables.
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checklist.publicLinks}
                    onChange={() => toggleCheck("publicLinks")}
                    className="w-4 h-4 rounded border-gray-300 text-[#F38821] focus:ring-[#F38821] accent-[#F38821] cursor-pointer"
                  />
                  <span className="text-[12.5px] text-gray-600 group-hover:text-gray-800 transition">
                    All external links are set to public.
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checklist.cited}
                    onChange={() => toggleCheck("cited")}
                    className="w-4 h-4 rounded border-gray-300 text-[#F38821] focus:ring-[#F38821] accent-[#F38821] cursor-pointer"
                  />
                  <span className="text-[12.5px] text-gray-600 group-hover:text-gray-800 transition">
                    I have cited all external research.
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={checklist.original}
                    onChange={() => toggleCheck("original")}
                    className="w-4 h-4 rounded border-gray-300 text-[#F38821] focus:ring-[#F38821] accent-[#F38821] cursor-pointer"
                  />
                  <span className="text-[12.5px] text-gray-600 group-hover:text-gray-800 transition">
                    This is my own original work.
                  </span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6">
              <button className="text-[#F38821] text-sm font-bold hover:underline transition">
                ← Save Draft
              </button>
              <button className="bg-[#F38821] text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-[#e07a1a] transition shadow-sm">
                Submit Deliverable
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            {/* Submission History */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-[0.15em] mb-8">
                Submission History
              </h3>
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <svg
                  className="w-10 h-10 text-gray-200 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs text-gray-400 font-medium">
                  No previous attempts
                </p>
              </div>
            </div>

            {/* My Mentor */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-6">
                My Mentor
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={funke}
                  alt="Dr. Funke Adeyemi"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] font-bold text-gray-900 leading-tight">
                    Dr. Funke Adeyemi
                  </p>
                  <p className="text-xs text-gray-400">
                    Senior Product Designer
                  </p>
                </div>
              </div>

              {/* Mentor Note */}
              <div className="bg-[#F38821] rounded-xl p-4 mb-5">
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">
                  Note from Dr. Adeyemi
                </p>
                <p className="text-[13px] text-white font-medium leading-relaxed">
                  "Focus on the 'Why' behind the user behavior patterns, rather
                  than just the 'What'. Looking forward to seeing your
                  synthesis!"
                </p>
              </div>

              <button className="text-[#F38821] text-sm font-bold hover:underline transition w-full text-center">
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
