import React from "react";
import AppNavbar from "../components/AppNavbar";
import { CheckCircle2, Trophy, Flame, Zap, BookOpen, Sun, Award, Download, Share2, Award as CertificateIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Certifications() {
  const stats = [
    { label: "CERTIFICATE EARNED", value: "4" },
    { label: "BADGES EARNED", value: "11" },
    { label: "COURSES COMPLETED", value: "7" },
    { label: "LEARNING STREAKS", value: "14days", showDot: true }
  ];

  const courses = [
    { title: "Conduct UX reserach and test early concepts", date: "Mar 12, 2026" },
    { title: "Foundation of UI/UX design", date: "Mar 12, 2026" },
    { title: "Visual design essential", date: "Mar 12, 2026" },
    { title: "Advanced prototyping & Testing", date: "Mar 12, 2026" }
  ];

  const badges = [
    { name: "Top Learner", desc: "Ranked in top 5% of all learners this cohort", icon: <Trophy size={18} className="text-yellow-500" />, status: "Earned" },
    { name: "14-day streak", desc: "Studied consistently for 14-days in a row", icon: <Flame size={18} className="text-orange-500" />, status: "Earned" },
    { name: "Fast Finisher", desc: "Complete a course under 7 days", icon: <Zap size={18} className="text-red-500" />, status: "Earned" },
    { name: "Quiz Master", desc: "Scored 100% on quizzes", icon: <BookOpen size={18} className="text-red-600" />, status: "Earned" },
    { name: "Program Graduate", desc: "Completed the full UI/UX Program", icon: <Sun size={18} className="text-yellow-400" />, status: "Earned" },
    { name: "Community Helper", desc: "Answers 20 questions in the community host", icon: <Award size={18} className="text-yellow-500" />, status: "Locked" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans pb-20">
      <AppNavbar />

      <main className="max-w-[1000px] mx-auto px-4 md:px-8 pt-8">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Certification & Badges</h1>
          <p className="text-xs text-gray-500">Track your achievement and download your earned certificate</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-xs border border-gray-100">
              <div className="flex items-center gap-1 mb-2">
                {stat.showDot && <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />}
                <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">{stat.label}</p>
              </div>
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8">
          <button className="px-5 py-1.5 bg-[#F38821] text-white text-[11px] font-bold tracking-wider rounded-full uppercase shadow-xs">ALL</button>
          <button className="px-5 py-1.5 bg-white text-gray-600 text-[11px] font-bold tracking-wider rounded-full uppercase border border-gray-100 shadow-xs">CERTIFICATE</button>
          <button className="px-5 py-1.5 bg-white text-gray-600 text-[11px] font-bold tracking-wider rounded-full uppercase border border-gray-100 shadow-xs">BADGES</button>
        </div>

        {/* Certificate Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Certificate</h2>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-100 mb-12">
          
          {/* Orange Certificate Banner */}
          <div className="bg-[#D97706] p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 shrink-0 border-2 border-white rounded-full flex items-center justify-center relative bg-transparent">
                <CertificateIcon size={32} className="text-white" />
                <div className="absolute inset-0 rounded-full border border-white/30 m-[-6px]"></div>
              </div>
              <div className="text-white">
                <p className="text-[11px] font-bold tracking-widest uppercase mb-1 opacity-90">CERTIFICATE OF COMPLETION</p>
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">UI/UX Design Program</h3>
                <p className="text-sm opacity-90 font-medium">Fox Academy • Cohort 1 • 2025-2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button className="px-4 py-2 border border-white/40 text-white rounded-full text-[13px] font-semibold hover:bg-white/10 transition-colors">View certificate</button>
              <button className="px-5 py-2 bg-white text-[#D97706] rounded-full text-[13px] font-semibold hover:bg-orange-50 transition-colors shadow-sm">Download PDF</button>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            {/* Success Banner */}
            <div className="bg-green-100/50 border border-green-300 rounded-xl p-4 flex gap-3 mb-8">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="text-green-800 font-bold text-sm">Program completed - congratulations, AMARA!</h4>
                <p className="text-green-700 text-[13px] mt-0.5">You have successfully completed all 4 courses in the UI/UX Design Program</p>
              </div>
            </div>

            {/* Courses List */}
            <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">COURSES IN THIS PROGRAM</h5>
            <div className="divide-y divide-gray-100">
              {courses.map((course, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between">
                  <div className="flex gap-3">
                    <CheckCircle2 size={18} className="text-[#F38821] shrink-0 mt-0.5" fill="#fef3c7" />
                    <div>
                      <h6 className="font-bold text-sm text-gray-900">{course.title}</h6>
                      <p className="text-[11px] text-gray-500 mt-0.5">completed • Issued {course.date}</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 font-bold text-[10px] px-3 py-1 rounded tracking-wide">Completed</span>
                </div>
              ))}
            </div>
            
            {/* Download/Share Footer Area */}
            <div className="mt-8 bg-[#F5F5F5] border border-gray-100 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-24 h-16 bg-white rounded flex flex-col items-center justify-center shadow-xs shrink-0 relative overflow-hidden">
                <div className="w-12 h-1.5 bg-orange-400 rounded-full mb-2"></div>
                <div className="w-16 h-px bg-gray-200 mb-1"></div>
                <div className="w-16 h-px bg-gray-200 mb-2"></div>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-gray-900 mb-1">Your certificate is ready</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 max-w-2xl">
                  Download your official certificate of completion and share it on your Linkedin, your portfolio or anywhere you'd like to showcase your achievement
                </p>
                <div className="flex gap-3">
                  <button className="bg-[#D97706] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-xs hover:bg-[#b56305] transition-colors">Download PDF</button>
                  <button className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-bold shadow-xs hover:bg-gray-50 transition-colors">Share to Linkedin</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Badges Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Badges</h2>
          <button className="text-[#F38821] text-[13px] font-bold hover:underline">view all</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {badges.map((badge, idx) => {
            const isLocked = badge.status === "Locked";
            return (
              <div key={idx} className={`bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center shadow-xs ${isLocked ? 'opacity-60' : ''}`}>
                <div className="h-10 flex items-center justify-center mb-2">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-[13px] text-gray-900 mb-1.5">{badge.name}</h4>
                <p className="text-[10px] text-gray-500 leading-snug h-[45px]">{badge.desc}</p>
                <div className="mt-auto pt-3">
                  <span className={`px-4 py-1 rounded text-[10px] font-bold text-white tracking-wide ${isLocked ? 'bg-gray-200 text-gray-400' : 'bg-[#4CAF50]'}`}>
                    {isLocked ? 'Locked' : 'Earned'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
