import React, { useState } from "react";
import EstherImg from "../assets/images/Esther.png";
import DavidImg from "../assets/images/David.png";
import TomImg from "../assets/images/tom.png";
import ObiImg from "../assets/images/obi.png";
import JohnImg from "../assets/images/john.png";
import MayowaImg from "../assets/images/mayowa.png";
import SarahImg from "../assets/images/sarah.png";
import AliceImg from "../assets/images/alice.png";
import AmaraImg from "../assets/images/amara.jpg";
import MemberA from "../assets/images/member-a.png";
import MemberB from "../assets/images/member-b.png";
import MemberC from "../assets/images/member-c.png";
import MemberD from "../assets/images/member-d.png";

const filters = [
  "All",
  "UI Design",
  "Frontend",
  "Backend",
  "Project",
  "Social Media",
  "Graphics Design",
];

const disciplines = [
  {
    label: "UI/UX DESIGN",
    members: [
      { name: "Esther Kolawole", role: "UX Design", img: EstherImg, isLead: true },
      { name: "John Sopuruchukwu", role: "UX Design", img: JohnImg },
      { name: "Amara Obi", role: "UX Design", img: ObiImg, isYou: true },
      { name: "Mayowa Williams", role: "UX Design", img: MayowaImg },
    ],
    filterKey: "UI Design",
  },
  {
    label: "FRONTEND",
    members: [
      { name: "David Leonard", role: "Frontend", img: DavidImg, isLead: true },
      { name: "Sarah Richards", role: "Frontend", img: SarahImg },
      { name: "Tom Holland", role: "Frontend", img: TomImg },
      { name: "Alice Chris", role: "Frontend", img: AliceImg },
    ],
    filterKey: "Frontend",
  },
  {
    label: "BACKEND",
    members: [
      { name: "Backend Member A", role: "Backend", img: MemberC, isLead: true },
      { name: "Backend Member B", role: "Backend", img: MemberD },
    ],
    filterKey: "Backend",
  },
  {
    label: "PROJECT",
    members: [
      { name: "Project Lead", role: "Project", img: MemberA, isLead: true },
      { name: "Project Member", role: "Project", img: MemberB },
    ],
    filterKey: "Project",
  },
];

export default function TeamList() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const visibleDisciplines =
    activeFilter === "All"
      ? disciplines
      : disciplines.filter((d) => d.filterKey === activeFilter);

  const filteredDisciplines = visibleDisciplines.map((disc) => ({
    ...disc,
    members: disc.members.filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((d) => d.members.length > 0);

  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Header Area */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-1">Team Foxtrot</h1>
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold text-[#F38821]">
            20 members&nbsp;·&nbsp;5 disciplines
          </p>
          <div className="flex -space-x-2">
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={MemberA} alt="" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={MemberB} alt="" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={MemberC} alt="" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src={MemberD} alt="" />
            <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-600">
              +17
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-100 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#F38821]/30 shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide border transition-colors ${
                activeFilter === f
                  ? "bg-[#F38821] text-white border-[#F38821]"
                  : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Overall Team Lead */}
      <section>
        <h2 className="text-[10px] font-bold text-[#F38821] uppercase tracking-[0.15em] mb-3">
          Overall Team Lead
        </h2>
        <div className="bg-[#E07B1A] rounded-2xl p-6 flex items-center justify-between text-white gap-4">
          <div className="flex items-center gap-4">
            <img
              src={AmaraImg}
              className="w-14 h-14 rounded-full border-2 border-white/40 object-cover"
              alt="Amara Obi"
            />
            <div>
              <h3 className="text-lg font-bold">Amara Obi</h3>
              <p className="text-sm text-orange-100 mt-0.5">UX Design · Strategic Lead</p>
            </div>
          </div>
          <button className="bg-white text-[#E07B1A] text-xs font-bold px-5 py-2 rounded-lg hover:bg-orange-50 transition whitespace-nowrap">
            Send Message
          </button>
        </div>
      </section>

      {/* Discipline Sections */}
      {filteredDisciplines.map((disc) => (
        <section key={disc.label}>
          <div className="border-t border-gray-100 mb-5" />
          <h2 className="text-[11px] font-bold text-gray-800 uppercase tracking-[0.15em] mb-4">
            {disc.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disc.members.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function MemberCard({ name, role, img, isLead, isYou }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <img
          src={img}
          className="w-11 h-11 rounded-full object-cover shrink-0"
          alt={name}
        />
        <div>
          <p className="text-sm font-bold text-gray-900 mb-1">{name}</p>
          <p className="text-xs text-gray-500 mb-2">{role}</p>
          <div className="flex gap-1.5 flex-wrap">
            {isLead && (
              <span className="bg-[#E07B1A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                Team Lead
              </span>
            )}
            {isYou && (
              <span className="bg-[#E07B1A] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                You
              </span>
            )}
          </div>
        </div>
      </div>
      <button className="text-[#F38821] text-xs font-semibold hover:underline shrink-0 mt-0.5">
        Send Message
      </button>
    </div>
  );
}
