import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import TeamList from "./TeamList";
import DirectorySidebar from "./DirectorySidebar";

export default function TeamDirectory() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      <DashboardNavbar />

      <main className="mx-auto max-w-[1440px] px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <TeamList />
          <DirectorySidebar />
        </div>

        {/* Footer — matches MyLearning */}
        <footer className="mt-20 border-t border-gray-100 pt-12 pb-8">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-end">
            {["PRIVACY", "TERMS", "SUPPORT"].map((link) => (
              <button key={link} className="text-xs font-black tracking-widest text-[#F38821] hover:underline">
                {link}
              </button>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
