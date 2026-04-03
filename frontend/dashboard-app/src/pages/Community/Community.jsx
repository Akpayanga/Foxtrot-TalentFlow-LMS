import React, { useState } from "react";
import ChannelSidebar from "./ChannelSidebar";
import MainFeed from "./MainFeed";
import RightSidebar from "./RightSidebar";

const Community = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 1. Define the specific users active on the main feed
  const mainFeedActiveUsers = [
    { initials: "AU", name: "Anthony Ugwu" },
    { initials: "TO", name: "Titilayo Olanrewaju" },
    { initials: "BA", name: "Bolade Adeaga" },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans">
      <div className="flex flex-1 w-full max-w-[1280px] mx-auto overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block w-[256px] border-r border-gray-100 min-h-screen z-10">
          <ChannelSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </aside>

        {/* MAIN FEED */}
        <MainFeed onOpenSidebar={() => setIsSidebarOpen(true)} />

        {/* 2. RIGHT SIDEBAR - Passing the dynamic users as a prop! */}
        <RightSidebar activeUsers={mainFeedActiveUsers} />
      </div>
    </div>
  );
};

export default Community;
