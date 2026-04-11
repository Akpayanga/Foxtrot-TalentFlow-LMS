import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import MyTasksView from "./MyTasksView";

export default function MyWorkBoard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mytasks");

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <AppNavbar />

      <main className="max-w-[1216px] mx-auto p-4 md:p-8 mt-4 relative">
        {/* Breadcrumbs */}
        <button onClick={() => navigate('/overview')} className="text-[10px] font-bold text-[#F38821] uppercase tracking-widest flex items-center gap-2 mb-6 hover:underline">
          <span>←</span> Back to Project Overview
        </button>

        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              My Work Board
            </h1>
            <p className="text-base font-normal text-[#F38821]">
              Your deliverables for FinEase - UX Design Track
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100/50 p-1.5 rounded-lg border border-gray-200 w-max">
            <button
              onClick={() => navigate('/work-board')}
              className={`px-6 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === "fullboard"
                  ? "bg-[#F38821] text-white shadow-sm"
                  : "text-[#F38821] hover:bg-gray-100"
              }`}
            >
              Full Board
            </button>
            <button
              onClick={() => setActiveTab("mytasks")}
              className={`px-6 py-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === "mytasks"
                  ? "bg-[#F38821] text-white shadow-sm"
                  : "text-[#F38821] hover:bg-gray-100"
              }`}
            >
              My Tasks
            </button>
          </div>
        </header>

        {/* My Tasks View */}
        {activeTab === "mytasks" && <MyTasksView />}

        {/* Floating Action Button */}
        <button className="fixed bottom-10 right-10 w-14 h-14 bg-orange-700 text-white rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-orange-800 transition transform hover:scale-105 z-50">
          +
        </button>
      </main>
    </div>
  );
}
