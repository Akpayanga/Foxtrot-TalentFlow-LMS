import profile from "../assets/profile.png";

const UpcomingProject = () => {
  // Array for the team avatars
  const team = [
    { id: "ux", role: "UX", isUser: true },
    { id: "fe", role: "FE", isUser: false },
    { id: "be", role: "BE", isUser: false },
    { id: "pm", role: "PM", isUser: false },
    { id: "qa", role: "QA", isUser: false },
  ];

  return (
    <div className="w-full bg-[#FEF3E9] p-[40px] rounded-[12px] mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
        {/* LEFT COLUMN: Project Details */}
        <div className="flex flex-col justify-center">
          {/* Orange Tag */}
          <span className="bg-[#f38821] text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider self-start mb-5">
            Capstone Project
          </span>

          {/* Title */}
          <h2 className="text-[32px] font-bold text-gray-900 leading-tight mb-4">
            Fox Academy
            <br />
            LMS
            <br />
            Redesign
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-8 pr-4 leading-relaxed">
            Redesign the internal learning experience focusing on mentorship
            accessibility and student engagement metrics.
          </p>

          {/* Progress Bar Label */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold tracking-widest text-gray-900 uppercase">
              Phase 1 Requirement
            </span>
            <span className="text-[10px] font-bold text-gray-900">18/100%</span>
          </div>

          {/* Progress Bar (Black Fill) */}
          <div className="w-full bg-gray-200 rounded-full h-1 mb-8">
            <div
              className="bg-gray-900 h-1 rounded-full"
              style={{ width: "10%" }}
            ></div>
          </div>

          {/* Locked Button */}
          <button className="self-start bg-gray-200/60 text-gray-400 px-6 py-3 rounded-lg text-sm font-bold flex items-center gap-2 cursor-not-allowed">
            View Project Details
            {/* Lock Icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0110 0v4"></path>
            </svg>
          </button>
        </div>

        {/* RIGHT COLUMN: Your Team */}
        <div className="bg-[#F09F45] rounded-[16px] p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-white text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">
            Your Team
          </h3>

          {/* Overlapping Avatars Container */}
          <div className="flex items-center -space-x-3 mb-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="relative flex flex-col items-center"
              >
                {/* The Circle */}
                <div
                  className={`w-12 h-12 rounded-full border-[3px] border-[#F09F45] flex items-center justify-center shadow-sm overflow-hidden z-10 ${
                    member.isUser ? "bg-white" : "bg-white text-gray-300"
                  }`}
                >
                  {member.isUser ? (
                    <img
                      src={profile}
                      alt="You"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-bold">?</span>
                  )}
                </div>

                {/* The Tiny Role Badge (Overlapping the bottom of the circle) */}
                <div
                  className={`absolute -bottom-1.5 z-20 px-1.5 py-[1px] rounded-[3px] text-[7px] font-bold uppercase ${
                    member.isUser
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {member.role}
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/95 text-xs px-6 leading-relaxed mt-2">
            Your teammates will be revealed when you complete Phase 1.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProject;
