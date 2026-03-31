import mentor from "../assets/mentor.png";
import videoIcon from "../assets/video.png";
import visibilityIcon from "../assets/visibility.png";
import interviewIcon from "../assets/interview.png";

const Sidebar = () => {
  // Add the correct icon to each task
  const tasks = [
    { id: 1, title: "User Flow Video", icon: videoIcon },
    { id: 2, title: "Usability Quiz", icon: visibilityIcon },
    { id: 3, title: "Interview Script", icon: interviewIcon },
  ];

  return (
    <aside className="flex flex-col gap-[48px] w-full font-['Inter']">
      {/* WIDGET 1: TO-DO (ASSIGNMENTS) */}
      <div className=" flex flex-col gap-[24px]">
        <div className="flex justify-between items-center px-1">
          <h3 className="text-xs font-bold tracking-[0.15em] text-gray-900 uppercase">
            Assignment(s)
          </h3>
          <span className="bg-[#f38821] text-white text-[9px] font-bold px-2 py-1 rounded-[4px] uppercase tracking-wider">
            3 New
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#FFF7F0] flex items-center justify-center text-gray-400 group-hover:text-[#f38821] group-hover:bg-[#FFF7F0] transition-colors">
                  <img
                    src={task.icon}
                    alt={task.title}
                    className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {task.title}
                </span>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300 group-hover:text-[#f38821] transition-colors"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </div>
          ))}
        </div>

        <button className="self-center mt-2 py-3.5 px-10 rounded-lg border-[1.5px] border-[#f38821] text-[#f38821] text-xs font-bold uppercase tracking-wider hover:bg-[#FFF7F0] transition-colors">
          View All Tasks &gt;
        </button>
      </div>

      {/* WIDGET 2: RECENT FEEDBACK */}
      <div className="bg-white p-[32px] rounded-[12px] border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col gap-[24px]">
        <h3 className="text-xs font-extrabold tracking-[0.15em] text-gray-900 uppercase">
          Recent Feedback
        </h3>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src={mentor}
            alt="Mentor"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-bold text-gray-900">
              Mentor Funke Adeyemi
            </p>
            <p className="text-[11px] font-semibold text-[#4D49FC] mt-0.5">
              2h ago
            </p>
          </div>
        </div>

        {/* Quote Block */}
        <div className="bg-[#F4F3FF] p-5 rounded-xl relative">
          <span className="absolute -top-2 left-4 text-4xl text-[#C4B5FD] font-serif leading-none">
            "
          </span>
          <p className="text-sm text-[#7A7A9D] italic relative z-10 pt-2 leading-relaxed">
            "Great job on the user personas, Amara. The depth of pain points for
            the 'Executive' persona shows real empathy..."
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full mt-2 py-3.5 px-10 rounded-lg bg-[#f38821] text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm">
          View All Feedbacks &gt;
        </button>
      </div>

      {/*WIDGET 3: YOUR MENTOR*/}
      <div className="bg-white p-[32px] rounded-[12px] border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col gap-[24px]">
        <h3 className="text-xs font-bold tracking-[0.15em] text-gray-900 uppercase">
          Your Mentor
        </h3>

        {/* Mentor Profile */}
        <div className="flex flex-col items-center text-center mt-2">
          {/* Avatar with Online Dot */}
          <div className="relative mb-4">
            <img
              src={mentor}
              alt="Mentor"
              className="w-20 h-20 rounded-full object-cover shadow-sm"
            />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          <h4 className="text-lg font-bold text-gray-900 mb-1">
            Dr. Funke Adeyemi
          </h4>
          <p className="text-xs font-semibold text-gray-500 mb-4">
            Senior UX Mentor
          </p>

          {/* Availability Badge */}
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-green-700 tracking-wider uppercase bg-green-50 px-3 py-1.5 rounded-sm">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            Available for check-ins
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <button className="w-full py-3.5 rounded-lg border-[1.5px] border-[#f38821] text-[#f38821] text-sm font-bold transition-colors hover:bg-[#FFF7F0]">
            Send Message
          </button>
          <button className="w-full py-3.5 rounded-lg bg-[#f38821] text-white text-sm font-bold transition-colors hover:bg-orange-600 shadow-sm">
            Book a Session
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
