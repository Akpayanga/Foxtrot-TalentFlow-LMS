import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyTasksView() {
  const navigate = useNavigate();
  const [checkedTasks, setCheckedTasks] = useState({});

  const toggleTask = (cardId, taskIndex) => {
    const key = `${cardId}-${taskIndex}`;
    setCheckedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* LEFT SIDE: Main Content - 9 columns */}
      <div className="lg:col-span-9">
        {/* Summary Stats */}
        <div className="flex gap-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              Total Deliverables
            </span>
            <span className="w-7 h-7 rounded-full bg-[#F38821] text-white flex items-center justify-center text-sm font-bold">
              3
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              In Progress
            </span>
            <span className="w-7 h-7 rounded-full bg-[#F38821] text-white flex items-center justify-center text-sm font-bold">
              1
            </span>
          </div>
        </div>

        {/* My Overall Contribution */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">
              My Overall Contribution
            </h3>
            <span className="text-3xl font-bold text-gray-900">18%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[18%] bg-[#F38821] rounded-full"></div>
          </div>
        </div>

        {/* Deliverable Cards */}
        <div className="space-y-6">
          {/* UX Research Report Card */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-2">UX Research Report</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                  <p className="text-[9px] font-bold text-[#22C55E] uppercase tracking-wider">
                    In Progress
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                  PROGRESS
                </p>
                <p className="text-2xl font-bold text-gray-900">60%</p>
              </div>
            </div>

            {/* Subtasks */}
            <div className="space-y-3 mb-6 mt-6">
              {[
                "User Personas Development",
                "Information Architecture Map",
                "Affinity Map",
              ].map((task, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedTasks[`research-${idx}`] || false}
                    onChange={() => toggleTask("research", idx)}
                    className="w-4 h-4 rounded border border-gray-300 cursor-pointer accent-[#F38821]"
                  />
                  <span className="text-sm text-gray-700">{task}</span>
                </label>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
              <div className="h-full w-[60%] bg-[#F38821] rounded-full"></div>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate('/submit-deliverable')}
              className="bg-[#F38821] text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors"
            >
              Submit Task
            </button>
          </div>

          {/* Wireframes Card */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-2">Wireframes</h4>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                  Not Started
                </p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                  PROGRESS
                </p>
                <p className="text-2xl font-bold text-gray-900">0%</p>
              </div>
            </div>

            {/* Subtasks */}
            <div className="space-y-3 mb-6 mt-6">
              {[
                "Low-fidelity Sketches",
                "Digital Grayscale Wireframes",
              ].map((task, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedTasks[`wireframes-${idx}`] || false}
                    onChange={() => toggleTask("wireframes", idx)}
                    className="w-4 h-4 rounded border border-gray-300 cursor-pointer accent-[#F38821]"
                  />
                  <span className="text-sm text-gray-700">{task}</span>
                </label>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
              <div className="h-full w-[0%] bg-gray-300 rounded-full"></div>
            </div>

            {/* Button */}
            <button className="bg-[#F38821] text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Start Deliverable
            </button>
          </div>

          {/* Usability Testing Card - Locked */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm opacity-60">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🔒</span>
                  <h4 className="text-base font-bold text-gray-900">Usability Testing</h4>
                </div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                  Locked
                </p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                  PROGRESS
                </p>
                <p className="text-2xl font-bold text-gray-900">0%</p>
              </div>
            </div>

            {/* Subtasks */}
            <div className="space-y-3 mb-6 mt-6">
              <p className="text-[9px] text-gray-400">
                Unlock after Wireframes is submitted
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
              <div className="h-full w-[0%] bg-gray-300 rounded-full"></div>
            </div>

            {/* Button */}
            <button
              disabled
              className="bg-gray-400 text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest cursor-not-allowed"
            >
              Start Deliverable
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Sidebar - 3 columns */}
      <div className="lg:col-span-3 space-y-6">
        {/* Deliverable Progress */}
        <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
          <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">
            Deliverable Progress
          </h3>
          <div className="space-y-6">
            {/* Research */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                  Research
                </p>
                <p className="text-sm font-bold text-gray-900">40%</p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-[#F38821] rounded-full"></div>
              </div>
            </div>

            {/* Wireframes */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                  Wireframes
                </p>
                <p className="text-sm font-bold text-gray-900">0%</p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[0%] bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Testing */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                  Testing
                </p>
                <p className="text-sm font-bold text-gray-900">0%</p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[0%] bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
          <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">
            Project Timeline
          </h3>
          <div className="space-y-0">
            {/* Phase 1 */}
            <div className="flex gap-4 pb-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] z-10"></div>
                <div className="w-[1.5px] flex-1 bg-gray-200 my-1"></div>
              </div>
              <div className="pb-2">
                <p className="text-[9px] font-bold text-[#22C55E] uppercase tracking-widest mb-1">
                  Completed
                </p>
                <p className="text-sm font-bold text-gray-600">Phase 1-Foundations</p>
                <p className="text-[11px] text-gray-400">Completed July 15</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-4 pb-8">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#F38821] ring-4 ring-orange-50 z-10"></div>
                <div className="w-[1.5px] flex-1 bg-gray-200 my-1"></div>
              </div>
              <div className="pb-2">
                <p className="text-[9px] font-bold text-[#F38821] uppercase tracking-widest mb-1">
                  In Progress
                </p>
                <p className="text-sm font-bold text-gray-900">Phase 2-Execution</p>
                <p className="text-[11px] text-gray-400">In Progress - July Aug 15</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300 z-10"></div>
              </div>
              <div className="pb-2">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Upcoming
                </p>
                <p className="text-sm font-bold text-gray-500">Phase 3: Final Submission</p>
                <p className="text-[11px] text-gray-400">Due on Sept 15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note Card */}
        <div className="bg-[#F38821] rounded-[20px] p-6 text-white shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <svg
              className="w-5 h-5 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="12" y="16" textAnchor="middle" fontSize="16" fontWeight="bold">
                i
              </text>
            </svg>
            <h3 className="text-sm font-bold uppercase tracking-wider">Note</h3>
          </div>
          <p className="text-[13px] leading-relaxed">
            The FinEase dates shine follows a strict spec which. Each shift must be approved by Sr. Adjuster before you can officially submit the final version.
          </p>
        </div>
      </div>
    </div>
  );
}
