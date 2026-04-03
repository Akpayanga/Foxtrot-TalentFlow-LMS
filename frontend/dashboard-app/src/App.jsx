import { Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import WatchCourse from "./pages/WatchCourse/WatchCourse";
import Community from "./pages/Community/Community";
import PostDetails from "./pages/Community/PostDetails";
import StartDiscussion from "./pages/Community/StartDiscussion";

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans pb-10">
      {/* TopNav stays outside the Routes so it shows on EVERY page! */}
      <TopNav />

      {/* This is the Traffic Cop that switches the pages */}
      <Routes>
        {/* If the URL is exactly "/", show the Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* If the URL is "/my-learning", show the Watch Course page */}
        <Route path="/my-learning" element={<WatchCourse />} />

        {/* If the URL is "/community", show the Community page */}
        <Route path="/community" element={<Community />} />

        {/* If the URL is "/community/post", show the Post Details page */}
        <Route path="/community/post" element={<PostDetails />} />

        {/* If the URL is "/community/new", show the Start Discussion page */}
        <Route path="/community/new" element={<StartDiscussion />} />
      </Routes>
    </div>
  );
}

export default App;
