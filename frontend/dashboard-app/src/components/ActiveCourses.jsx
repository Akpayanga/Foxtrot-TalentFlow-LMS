const ActiveCourses = () => {
  const courses = [
    {
      id: 1,
      tag: "USER RESEARCH",
      title: "Conduct UX Research and Test Early Concepts",
      progress: 98,
      btnText: "Resume Video",
      isActive: true,
    },
    {
      id: 2,
      tag: "FUNDAMENTALS",
      title: "Foundation of UI/UX Design",
      progress: 2,
      btnText: "Resume Video",
      isActive: true,
    },
    {
      id: 3,
      tag: "DESIGN THEORY",
      title: "Visual Design Essentials",
      progress: 0,
      btnText: "Start Video",
      isActive: false,
      isLocked: true,
      unlocksAt: "Unlocks In Week 4",
    },
  ];

  return (
    
    <div className="w-full font-['Inter']">
      <div className="flex justify-between items-end mb-6 px-1">
        <h2 className="text-lg md:text-[22px] font-bold text-gray-900">
          My Active Courses
        </h2>
        <a href="#" className="text-[10px] md:text-xs font-bold text-[#f38821]">
          View All &gt;
        </a>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col md:flex-row items-center p-5 gap-6 bg-white rounded-[24px] border border-gray-100 shadow-sm w-full"
          >
            <div className="w-full md:w-[180px] h-[120px] bg-[#F4F3FF] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#C4B5FD"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
            </div>

            <div className="flex-1 w-full text-center md:text-left">
              {/* CONDITIONAL TAG COLOR: Gray if locked, Purple if active */}
              <span
                className={`text-[9px] font-bold px-2 py-1 rounded-sm uppercase mb-2 inline-block ${
                  course.isLocked
                    ? "text-gray-500 bg-gray-100"
                    : "text-[#5542F6] bg-[#F4F3FF]"
                }`}
              >
                {course.tag}
              </span>

              <h3 className="font-bold text-gray-900 text-base mb-4 leading-tight">
                {course.title}
              </h3>

              {!course.isLocked ? (
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-[#F4F3FF] rounded-full overflow-hidden">
                    <div
                      className="bg-[#5542F6] h-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-gray-400 min-w-[30px]">
                    {course.progress}%
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gray-400"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    {course.unlocksAt}
                  </p>
                </div>
              )}
            </div>

            <button
              className={`w-full md:w-auto px-8 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 flex-shrink-0 ${course.isActive ? "bg-[#5542F6] text-white shadow-sm" : "bg-gray-100 text-gray-400"}`}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
              {course.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveCourses;
