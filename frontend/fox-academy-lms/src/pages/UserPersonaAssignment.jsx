import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { 
  ChevronRight, 
  Download, 
  CheckCircle, 
  CloudUpload, 
  HelpCircle,
  FileText,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const UserPersonaAssignment = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <DashboardNavbar />
      
      <main className="flex-1 mx-auto w-full max-w-[1440px] px-6 py-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium mb-12">
          <Link 
            to="/assignments" 
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            Assignments
          </Link>
          <ChevronRight size={16} className="text-gray-300" />
          <span className="text-[#F38821]">User Persona Document</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          {/* Left Column: Assignment Details */}
          <div className="space-y-12">
            {/* Header & Description */}
            <section>
              <h1 className="text-4xl font-extrabold text-[#111827] mb-6 tracking-tight">
                User Persona Document
              </h1>
              <div className="space-y-6 text-gray-500 leading-relaxed max-w-2xl">
                <p>
                  For this assignment, you are required to synthesize your user research into three distinct User Personas. 
                  These personas will serve as the foundational archetypes for the rest of your product development cycle.
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Identify core user motivations and pain points based on your interview data</li>
                  <li>Create one primary persona and two secondary personas representing different demographics</li>
                  <li>Include professional goals, technical proficiency, and typical daily workflows for each</li>
                </ul>
              </div>
            </section>

            {/* Linked Learning Section */}
            <section>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 rounded-xl bg-[#F38821] flex items-center justify-center text-white">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-1">
                      LINKED LEARNING
                    </p>
                    <h3 className="text-lg font-bold text-[#111827]">
                      Module 3: Synthesizing Research Data
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#F38821] uppercase bg-orange-50 px-3 py-1.5 rounded-full">
                  <CheckCircle size={14} className="fill-[#F38821] text-white" />
                  COMPLETED
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section>
              <h2 className="text-xl font-bold text-[#111827] mb-6">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceCard 
                  title="Fox Academy Persona Template.pdf"
                  info="PDF • 2.4 MB"
                />
                <ResourceCard 
                  title="Example User Personas"
                  info="Compressed Archive • 15.8 MB"
                />
              </div>
            </section>

            {/* How You'll Be Graded Section */}
            <section>
              <h2 className="text-xl font-bold text-[#111827] mb-8">How You'll Be Graded</h2>
              <div className="space-y-8">
                <GradingStep 
                  number="01"
                  title="Empathetic Depth"
                  description="Personas clearly demonstrate a deep understanding of the user's emotional state and core frustrations."
                />
                <GradingStep 
                  number="02"
                  title="Visual Hierarchy"
                  description="Information is structured logically, making key demographic data easy to scan and digest."
                />
                <GradingStep 
                  number="03"
                  title="Data-Driven Archetypes"
                  description="All traits listed in the personas are directly traceable back to the research interviews conducted in Module 3."
                />
              </div>
            </section>
          </div>

          {/* Right Column: Submission Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-orange-50/50">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-xl font-black text-[#111827]">Your Submission</h2>
                <div className="text-right">
                  <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Due Date</p>
                  <p className="font-bold text-[#111827]">March 24th</p>
                </div>
              </div>

              {/* Countdown Banner */}
              <div className="bg-[#FFF1F1] rounded-xl p-3 flex items-center gap-3 mb-6">
                <div className="h-5 w-5 bg-[#FFDADA] rounded-full flex items-center justify-center text-[#FF4D4D]">
                   <span className="text-[10px] font-black">!</span>
                </div>
                <span className="text-[10px] font-black tracking-widest text-[#FF4D4D] uppercase">
                  3 DAYS LEFT
                </span>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-[#FFF7ED] rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-[#F38821] transition-colors cursor-pointer mb-8">
                <div className="h-16 w-16 rounded-full bg-orange-50 flex items-center justify-center text-[#F38821] mb-4 group-hover:scale-110 transition-transform">
                  <CloudUpload size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-1">Drop your file here</h3>
                <p className="text-xs text-gray-400 font-medium">or click to browse</p>
              </div>

              {/* Paste Link */}
              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  PASTE A LINK
                </label>
                <input 
                  type="text" 
                  placeholder="https://figma.com/..."
                  className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-[#F38821]/20 outline-none placeholder:text-gray-300"
                />
              </div>

              {/* Mentor Note */}
              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  ADD A NOTE FOR YOUR MENTOR
                </label>
                <textarea 
                  placeholder="Any specific areas you'd like feedback on?"
                  rows={4}
                  className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-[#F38821]/20 outline-none placeholder:text-gray-300 resize-none"
                />
              </div>

              {/* Actions */}
              <div className="space-y-4 text-center">
                <button className="w-full bg-[#F38821] hover:bg-[#E07A1D] text-white text-sm font-black py-5 rounded-2xl transition-all shadow-lg shadow-orange-100 hover:-translate-y-0.5 active:translate-y-0">
                  Submit Assignment
                </button>
                <button className="text-[10px] font-black tracking-widest text-gray-400 hover:text-[#F38821] uppercase transition-colors">
                  Save Draft
                </button>
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4">
               <div className="h-10 w-10 flex-shrink-0 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#F38821]">
                 <HelpCircle size={20} />
               </div>
               <p className="text-xs font-medium text-gray-500 leading-relaxed">
                 Stuck? <Link to="/faq" className="text-[#F38821] font-bold underline underline-offset-2">Check the FAQ</Link> or message your mentor.
               </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-10 px-6 mt-20">
        <div className="mx-auto max-w-[1440px] flex justify-end gap-10">
          {['PRIVACY', 'TERMS', 'SUPPORT'].map(link => (
            <button 
              key={link} 
              className="text-[10px] font-black tracking-widest text-[#F38821] hover:underline"
            >
              {link}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

const ResourceCard = ({ title, info }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center justify-between group hover:shadow-md transition-all cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F38821]">
        <FileText size={24} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#111827] mb-0.5">{title}</h4>
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-tight">{info}</p>
      </div>
    </div>
    <div className="text-gray-300 group-hover:text-[#F38821] transition-colors">
      <Download size={18} />
    </div>
  </div>
);

const GradingStep = ({ number, title, description }) => (
  <div className="flex gap-6 items-start">
    <div className="h-12 w-12 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-[#F38821] text-xs font-black ring-8 ring-[#FDFDFD]">
      {number}
    </div>
    <div className="pt-1">
      <h4 className="text-lg font-bold text-[#111827] mb-1">{title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default UserPersonaAssignment;
