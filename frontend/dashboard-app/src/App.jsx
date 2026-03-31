import "./App.css";
// Importing all the individual building blocks (components) we created
import TopNav from "./components/TopNav";
import GreetingCard from "./components/GreetingCard";
import ActiveCourses from "./components/ActiveCourses";
import UpcomingProject from "./components/UpcomingProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans pb-10">
      {/* The Navigation bar sits at the very top of the page */}
      <TopNav />

      {/* MAIN LAYOUT CONTAINER
       */}
      <div className="max-w-[1280px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 lg:gap-[48px]">
        {/* LEFT COLUMN: Contains the main learning content */}

        <div className="flex flex-col gap-8 md:gap-12">
          <GreetingCard />
          <ActiveCourses />
          <UpcomingProject />
        </div>

        {/* RIGHT COLUMN: Contains the Sidebar */}
        <div className="w-full">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
