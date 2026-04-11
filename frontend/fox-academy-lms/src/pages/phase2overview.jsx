import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import member1 from "../assets/images/member-a.png";
import member2 from "../assets/images/member-b.png";
import member3 from "../assets/images/member-c.png";
import member4 from "../assets/images/member-d.png";
import obi from "../assets/images/obi.png";
import amara from "../assets/images/amara.jpg";

const orange = "#F38821";
const brownBg = "#6B3D15";
const darkBlueBg = "#1C1B4D";

const teamMembers = [
  { name: "Amara Obi", role: "Project Lead", img: obi },
  { name: "You", role: "UX Researcher", img: amara },
];

const deliverables = [
  { title: "Stakeholder Interviews Report", status: "SUBMITTED JUL 14", done: true },
  { title: "User Persona Synthesis", status: "DUE TOMORROW", done: false },
  { title: "Information Architecture Map", status: "DUE JUL 26", done: false },
];

const disciplines = [
  {
    name: "Project",
    desc: "Planning, coordination, and delivery",
    status: "IN PROGRESS",
    iconBg: orange,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    name: "UX Design",
    desc: "User flows, wireframing, and hi-fi prototyping",
    status: "IN PROGRESS",
    iconBg: orange,
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z" />
      </svg>
    ),
  },
  {
    name: "Graphic Design",
    desc: "Brand identity and marketing collateral",
    status: "IN PROGRESS",
    iconBg: orange,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "Frontend",
    desc: "React implementation and UI components",
    status: "NOT STARTED",
    iconBg: orange,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Backend",
    desc: "API architecture and database security",
    status: "NOT STARTED",
    iconBg: orange,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
        <ellipse cx="12" cy="7" rx="8" ry="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" />
      </svg>
    ),
  },
];

const files = [
  { name: "FinEase_Project_Scope_v2.pdf" },
  { name: "Market_Research_Analysis_2024.xlsx" },
  { name: "Brand_Assets_Kit.zip" },
  { name: "Sprint_1_Update_Deck.pptx" },
];

export default function Phase2overview() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <DashboardNavbar />
      
      <main className="max-w-[1280px] mx-auto p-6 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-8">
            
            {/* Header Area */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white text-[10px] font-bold px-2 py-1 rounded bg-[#F38821] uppercase tracking-wider">
                  Capstone Project
                </span>
                <span className="text-gray-600 text-sm font-semibold">
                  Team Foxtrot
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                FinEase — A Financial Wellness App for Young Nigerians
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F38821]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-900 font-semibold">Deadline: August 2nd</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F38821]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-900 font-semibold">20 Team Members</span>
                  <div className="flex -space-x-2 ml-2">
                    {[member1, member2, member3, member4].map((src, i) => (
                      <img key={i} src={src} className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="avatar" />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-700">
                      +17
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Brief Card */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#F38821" }}>
              <h3 className="text-[10px] font-bold text-[#F38821] uppercase tracking-widest mb-4">
                Project Brief
              </h3>
              <p className="text-white text-base leading-relaxed mb-8 font-medium">
                FinEase aims to bridge the financial literacy gap for Gen-Z
                Nigerians through an intuitive, gamified wellness platform. Over
                this 8-week intensive sprint, your team will research, design, and
                develop a functional MVP that handles micro-savings and automated
                expense tracking.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-4">
                  <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                     <span className="text-xs text-gray-400 font-semibold">Duration</span>
                     <span className="text-sm font-bold text-[#F38821]">8 Weeks</span>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                     <span className="text-xs text-gray-400 font-semibold">Output</span>
                     <span className="text-sm font-bold text-[#F38821]">Live MVP</span>
                  </div>
                </div>
                <button className="border border-white/40 text-white hover:bg-white/10 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
                  Download PRD
                </button>
              </div>
            </div>

            {/* Discipline Contributions */}
            <div>
              <h2 className="text-[#F38821] text-[11px] font-bold uppercase tracking-widest mb-4">
                Discipline Contributions
              </h2>
              <div className="space-y-3">
                {disciplines.map((d, i) => (
                  <div 
                    key={i} 
                    className={`bg-white rounded-xl flex border p-4 items-center justify-between ${d.active ? 'border-indigo-400 ring-1 ring-indigo-400 shadow-sm' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: d.iconBg }}>
                        {d.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{d.name}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
                      </div>
                    </div>
                    {d.status === "IN PROGRESS" ? (
                      <span className="bg-indigo-50 text-indigo-600 text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                        {d.status}
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-400 text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                        {d.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Shared Project Files */}
            <div>
              <h2 className="text-[#F38821] text-[11px] font-bold uppercase tracking-widest mb-4">
                Shared Project Files
              </h2>
              <div className="space-y-3">
                {files.map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#F38821]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{f.name}</span>
                    </div>
                    <button className="text-[11px] text-indigo-600 font-bold hover:underline uppercase tracking-wide">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-6 lg:mt-24">
            
            {/* Your Team */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">
                Your Team
              </h3>
              <div className="space-y-4">
                {teamMembers.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={m.img} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">{m.name}</h4>
                      <p className="text-[11px] text-gray-500">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-5 text-[11px] font-bold text-[#F38821] flex items-center gap-1 hover:underline">
                View full team
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Your Deliverables */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-5">
                Your Deliverables
              </h3>
              <div className="space-y-5">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      {d.done ? (
                        <div className="w-4 h-4 rounded-full bg-[#F38821] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-[#F38821]" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 leading-none mb-1">{d.title}</h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{d.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigate('/work-board')}
                className="w-full mt-6 bg-[#E87A13] hover:bg-[#D56B0E] text-white text-[12px] font-bold py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                Enter collaborative workspace
              </button>
            </div>

            {/* Instructor Note */}
            <div className="rounded-2xl p-6 text-white shadow-sm" style={{ backgroundColor: "#F38821" }}>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-[#F38821]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-[10px] font-bold text-[#F38821] uppercase tracking-[0.2em]">
                  Instructor Note
                </h3>
              </div>
              <p className="text-[13px] font-medium leading-relaxed italic opacity-90 mb-4">
                "Ensure your research methodology explicitly mentions how you address
                the low-trust environment in Nigerian fintech. This is critical for
                the MVP's success."
              </p>
              <p className="text-xs font-semibold text-white">
                — Prof. Adebayo
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
