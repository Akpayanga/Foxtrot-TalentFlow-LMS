import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import { WelcomeBanner, CapstoneProjectCard } from "../components/DashboardContent";
import CourseCard from "../components/CourseCard";
import { ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { listAllCourses } from "../services/courseService";

// Importing demo images
import auth1 from "../assets/images/auth1.png";
import auth2 from "../assets/images/auth2.png";
import auth3 from "../assets/images/auth3.png";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);
  const [coursesError, setCoursesError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      setCoursesError("");
      setIsLoadingCourses(true);

      try {
        const response = await listAllCourses();
        const courseList = response?.data || response?.courses || response || [];
        setCourses(Array.isArray(courseList) ? courseList : []);
      } catch (error) {
        const message =
          error?.response?.data?.message ||
          "Could not load courses right now. Please try again.";
        setCoursesError(message);
      } finally {
        setIsLoadingCourses(false);
      }
    };

    fetchCourses();
  }, []);

  const activeCourses = useMemo(() => {
    const fallbackThumbnails = [auth1, auth2, auth3];

    return courses.map((course, index) => {
      const courseId = course?.id || course?._id || course?.courseId || String(index + 1);
      const progress = Number(course?.progressPercent || course?.progress || 0);
      const isUnlocked = course?.isUnlocked !== false;

      return {
        id: courseId,
        thumbnail: course?.thumbnail || course?.image || fallbackThumbnails[index % fallbackThumbnails.length],
        category: course?.category || course?.track || course?.discipline || "COURSE",
        title: course?.title || course?.name || "Untitled Course",
        progress,
        isUnlocked,
        unlockMessage: course?.unlockMessage || "Locked",
      };
    });
  }, [courses]);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />
      
      <main className="mx-auto max-w-360 px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left Column: Main Content */}
          <div className="space-y-12">
            {/* Welcome Section */}
            <WelcomeBanner name="Amara" progress={18} />

            {/* Courses Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#111827]">My Active Courses (Phase 1)</h2>
                <button className="flex items-center gap-1 text-sm font-bold text-[#F38821] hover:underline">
                  View All Curriculum <ChevronRight size={14} />
                </button>
              </div>

              <div className="grid gap-4">
                {isLoadingCourses ? (
                  <p className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#6B7280]">
                    Loading courses...
                  </p>
                ) : null}

                {coursesError ? (
                  <p className="rounded-lg border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
                    {coursesError}
                  </p>
                ) : null}

                {!isLoadingCourses && !coursesError && activeCourses.length === 0 ? (
                  <p className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#6B7280]">
                    No courses available yet.
                  </p>
                ) : null}

                {!isLoadingCourses && !coursesError
                  ? activeCourses.map((course) => (
                      <CourseCard
                        key={course.id}
                        {...course}
                        to={`/courses/${course.id}`}
                      />
                    ))
                  : null}
              </div>
            </div>

            {/* Capstone Project Section */}
            <CapstoneProjectCard />
          </div>

          {/* Right Column: Sidebar */}
          <DashboardSidebar />
        </div>
      </main>
    </div>
  );
}
