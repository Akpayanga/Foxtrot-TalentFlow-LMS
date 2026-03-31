const GreetingCard = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-[24px] border border-gray-100 shadow-sm flex flex-col-reverse md:flex-row items-center justify-between gap-8 text-center md:text-left w-full">
      {/* 1. TEXT & PROGRESS BAR IS FIRST IN THE CODE */}

      <div className="flex-1 w-full max-w-none md:max-w-[420px]">
        <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900 leading-tight mb-4">
          Good morning,
          <br className="hidden md:block" /> Amara! 👋
        </h1>
        <p className="text-gray-500 text-sm mb-6 md:mb-10 leading-relaxed">
          You've completed <span className="font-bold text-gray-900">18%</span>{" "}
          of your Phase 1 learning
          <br /> journey. Keep the momentum going!
        </p>

        {/* Progress Bar Label */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold tracking-widest text-[#6B7280] uppercase">
            Phase 1 Progress
          </span>
          <span className="text-[10px] font-bold text-gray-900">18%</span>
        </div>

        {/* The Progress Bar Container */}
        <div className="w-full bg-[#F4F3FF] rounded-full h-[6px] mb-8">
          <div
            className="bg-[#5542F6] h-full rounded-full"
            style={{ width: "18%" }}
          ></div>
        </div>

        {/* Action Button:  */}
        <button className="w-full md:w-auto bg-[#f38821] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-md">
          Continue Learning &gt;
        </button>
      </div>

      {/* 2. THE DASHED IMAGE BOX IS SECOND IN THE CODE */}

      <div className="w-full max-w-[256px] aspect-square bg-[#F9F9FF] border-2 border-dashed border-[#EDEDFF] rounded-lg flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4B5FD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      </div>
    </div>
  );
};

export default GreetingCard;
