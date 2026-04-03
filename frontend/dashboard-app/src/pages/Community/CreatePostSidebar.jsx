import React from "react";

const CreatePostSidebar = () => {
  const sectionHeaderClass =
    "text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[1px] mb-6";

  return (
    <aside className="hidden xl:flex flex-col w-[288px] bg-white border-l border-gray-200 p-8 min-h-screen">
      <div className="flex flex-col gap-8 flex-1">
        {/* Tips Section */}
        <div>
          <h3 className={sectionHeaderClass}>TIPS FOR A GOOD POST</h3>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              <span className="text-[10px] font-bold text-gray-400 mt-0.5">
                01
              </span>
              <p className="text-[12px] text-gray-600 leading-relaxed font-medium">
                Be descriptive with your title. Use keywords that make it easy
                to find.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[10px] font-bold text-gray-400 mt-0.5">
                02
              </span>
              <p className="text-[12px] text-gray-600 leading-relaxed font-medium">
                Provide context or screenshots if you're asking for feedback on
                designs.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[10px] font-bold text-gray-400 mt-0.5">
                03
              </span>
              <p className="text-[12px] text-gray-600 leading-relaxed font-medium">
                Tag your post correctly to ensure the right experts see your
                question.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Note Block */}
      <div className="bg-[#1A1A1A] p-6 rounded-2xl mt-8 flex flex-col gap-2 shadow-lg">
        <div className="flex items-center gap-2 text-white mb-1">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v5h-2z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            NOTE
          </span>
        </div>
        <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
          Be mindful of the Fox Academy Code of Conduct. Keep discussions
          professional, supportive, and focused on collective growth. Avoid
          sharing sensitive personal data.
        </p>
      </div>
    </aside>
  );
};

export default CreatePostSidebar;
