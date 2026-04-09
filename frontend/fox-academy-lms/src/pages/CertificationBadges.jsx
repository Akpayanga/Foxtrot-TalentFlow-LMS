import React, { useState } from 'react';
import { CheckCircle2, Award, Download, ExternalLink, Trophy, Flame, Zap, BookCheck, Star, Handshake, BadgeCheck, ShieldAlert } from 'lucide-react';
import AppNavbar from '../components/AppNavbar';

const stats = [
  { label: 'CERTIFICATE EARNED', value: '4' },
  { label: 'BADGES EARNED', value: '11' },
  { label: 'COURSES COMPLETED', value: '7' },
  { label: 'LEARNING STREAKS', value: '14days', isStreak: true },
];

const courses = [
  { title: 'Conduct UX reserach and test early concepts', date: 'Mar 12, 2026' },
  { title: 'Foundation of UI/UX design', date: 'Mar 12, 2026' },
  { title: 'Visual design essential', date: 'Mar 12, 2026' },
  { title: 'Advanced prototyping & Testing', date: 'Mar 12, 2026' },
];

const badges = [
  { icon: Trophy, title: 'Top Learner', desc: 'Ranked in top 5% of all learners this cohort', color: '#D97706', earned: true },
  { icon: Flame, title: '14-day streak', desc: 'Studied consistently for 14 days in a row', color: '#F97316', earned: true },
  { icon: Zap, title: 'Fast Finisher', desc: 'Complete a course under 7 days', color: '#FBBF24', earned: true },
  { icon: BookCheck, title: 'Quiz Master', desc: 'Scored 100% on quizzes', color: '#EF4444', earned: true },
  { icon: Star, title: 'Program Graduate', desc: 'Completed the full UI/UX Program', color: '#F59E0B', earned: true },
  { icon: Handshake, title: 'Community Helper', desc: 'Answers 20 questions in the community host', color: '#F59E0B', earned: false },
];

export default function CertificationBadges() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { key: 'all', label: 'ALL' },
    { key: 'certificate', label: 'CERTIFICATE' },
    { key: 'badges', label: 'BADGES' },
  ];

  const showCertificates = activeTab === 'all' || activeTab === 'certificate';
  const showBadges = activeTab === 'all' || activeTab === 'badges';

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#111827]">
      <AppNavbar />

      <main className="mx-auto w-full max-w-[1280px] px-5 md:px-10 py-8">
        {/* Page Header */}
        <h1 className="text-2xl md:text-[32px] font-bold text-[#111827] mb-1">Certification & Badges</h1>
        <p className="text-[11px] font-medium text-[#6B7280] mb-6">
          Track your achievement and download your earned certificate
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl px-5 py-6 flex flex-col items-center text-center justify-center transition-all"
            >
              <div className="flex items-center gap-1.5 justify-center mb-2">
                {stat.isStreak && <div className="w-2 h-2 rounded-full bg-[#F38821]" />}
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#6B7280]">
                  {stat.label}
                </span>
              </div>
              <span className="text-[28px] font-bold text-[#111827] leading-none">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-wider transition-colors ${
                activeTab === tab.key
                  ? 'bg-[#F38821] text-white'
                  : 'bg-white text-[#374151] hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificate Section */}
        {showCertificates && (
          <section className="mb-12">
            <h2 className="text-lg font-bold text-[#111827] mb-4">Certificate</h2>

            {/* Certificate Hero Card */}
            <div className="rounded-xl overflow-hidden mb-6 bg-[#E17E22]">
              <div className="flex flex-col md:flex-row md:items-center justify-between px-6 md:px-10 py-10 md:py-12 gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-[84px] h-[84px] rounded-full border border-white flex items-center justify-center shrink-0" style={{ backgroundColor: '#5c310c' }}>
                    <BadgeCheck className="h-10 w-10 text-white stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                      CERTIFICATE OF COMPLETION
                    </h4>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">UI/UX Design Program</h3>
                    <p className="text-[13px] text-white/90">Fox Academy • Cohort 1 • 2025-2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex justify-center flex-1 md:flex-none items-center gap-2 px-6 py-2.5 rounded-full border border-white text-white text-[13px] font-semibold hover:bg-white/10 transition-colors">
                    View certificate
                  </button>
                  <button className="flex justify-center flex-1 md:flex-none items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#E17E22] text-[13px] font-semibold hover:bg-gray-100 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Congratulations Banner */}
            <div className="bg-[#DFEFE6] border border-[#a3cfae] rounded-xl px-5 py-4 flex items-start gap-3 mb-8">
              <CheckCircle2 className="h-5 w-5 text-[#2A824A] shrink-0 mt-0.5 stroke-2" />
              <div>
                <p className="text-[15px] font-bold text-[#2A824A] mb-0.5">
                  Program completed - congratulations, AMARA!
                </p>
                <p className="text-sm text-[#2A824A]/90">
                  You have successfully completed all 4 courses in the UI/UX Design Program
                </p>
              </div>
            </div>

            {/* Courses List */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-4">
              COURSES IN THIS PROGRAM
            </p>
            <div className="flex flex-col gap-0 mb-8">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 ${
                    i < courses.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F38821] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#111827]">{course.title}</p>
                      <p className="text-[11px] text-[#6B7280] mt-0.5">
                        completed <span className="text-[#F38821] mx-1">•</span> Issued {course.date}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit text-[11px] font-bold text-[#2A824A] bg-[#DFEFE6] px-4 py-1.5 rounded-sm">
                    Completed
                  </span>
                </div>
              ))}
            </div>

            {/* Download Certificate CTA */}
            <div className="bg-white rounded-xl px-6 py-6 flex flex-col md:flex-row md:items-center gap-6">
              {/* Certificate Graphic */}
              <div className="w-[140px] h-[90px] rounded-lg border border-[#E5E7EB] bg-white flex flex-col justify-center items-center p-4 gap-2.5 shrink-0 shadow-sm relative overflow-hidden">
                <div className="w-full h-2.5 bg-[#F38821] rounded-sm" />
                <div className="w-full h-1.5 bg-[#F38821]/40 rounded-sm" />
                <div className="w-3/4 h-1.5 bg-[#F38821]/40 rounded-sm" />
                <div className="w-6 h-6 rounded-full bg-[#F38821] mt-1" />
              </div>

              <div className="flex-1">
                <h4 className="text-[15px] font-bold text-[#111827] mb-1.5">Your certificate is ready</h4>
                <p className="text-[12px] text-[#374151] leading-relaxed max-w-3xl">
                  Download your official certificate of completion and share it on your LinkedIn, your portfolio or anywhere you'd like to showcase your achievement
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-[#F38821] text-white text-[13px] font-bold hover:bg-[#e07818] transition-colors">
                    Download PDF
                  </button>
                  <button className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg border border-[#E5E7EB] bg-white text-[#374151] text-[13px] font-bold hover:bg-gray-50 transition-colors">
                    Share to LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Badges Section */}
        {showBadges && (
          <section>
            <div className="flex items-center justify-between mb-5 border-b border-[#E5E7EB] pb-3">
              <h2 className="text-lg font-bold text-[#111827]">Badges</h2>
              <button className="text-[13px] font-bold text-[#F38821] hover:underline">view all</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {badges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-4 py-8 flex flex-col items-center text-center justify-between h-[200px]"
                  >
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="mb-4 text-[#D97706] scale-125">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-[13px] font-bold text-[#111827] mb-2 leading-tight">{badge.title}</h4>
                      <p className="text-[9px] text-[#6B7280] leading-snug px-2">{badge.desc}</p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-5 py-1.5 rounded text-white mt-4 ${
                        badge.earned ? 'bg-[#3AA84C]' : 'bg-[#E5E7EB] text-[#9CA3AF]'
                      }`}
                    >
                      {badge.earned ? 'Earned' : 'Locked'}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
