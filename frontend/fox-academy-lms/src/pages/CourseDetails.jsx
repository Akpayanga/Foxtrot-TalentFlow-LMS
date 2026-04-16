import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import { getCourseById } from "../services/courseService";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      setError("");
      setIsLoading(true);

      try {
        const response = await getCourseById(id);
        const payload = response?.data || response?.course || response;
        setCourse(payload || null);
      } catch (requestError) {
        const message =
          requestError?.response?.data?.message ||
          "Could not load this course right now. Please try again.";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const modules = useMemo(() => {
    if (!course) {
      return [];
    }

    if (Array.isArray(course?.modules)) {
      return course.modules;
    }

    if (Array.isArray(course?.lessons)) {
      return course.lessons;
    }

    return [];
  }, [course]);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <DashboardNavbar />

      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="mb-6">
          <Link to="/dashboard" className="text-sm font-medium text-[#F38821] hover:underline">
            Back to Courses
          </Link>
        </div>

        {isLoading ? (
          <p className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#6B7280]">
            Loading course details...
          </p>
        ) : null}

        {error ? (
          <p className="rounded-lg border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
            {error}
          </p>
        ) : null}

        {!isLoading && !error && course ? (
          <section className="space-y-6 rounded-xl border border-[#E5E7EB] bg-white p-6">
            <header className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#F38821]">
                {course?.category || course?.track || "Course"}
              </p>
              <h1 className="text-3xl font-bold text-[#111827]">
                {course?.title || course?.name || "Untitled Course"}
              </h1>
              <p className="text-sm text-[#6B7280]">
                {course?.description || "No description provided for this course yet."}
              </p>
            </header>

            <div className="rounded-lg bg-[#F9FAFB] px-4 py-3">
              <p className="text-sm text-[#374151]">
                Progress: <span className="font-semibold">{Number(course?.progressPercent || course?.progress || 0)}%</span>
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-[#111827]">Course Content</h2>

              {modules.length === 0 ? (
                <p className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#6B7280]">
                  No modules or lessons available for this course yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div key={module?.id || module?._id || index} className="rounded-lg border border-[#E5E7EB] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                        Module {module?.moduleNumber || module?.order || index + 1}
                      </p>
                      <p className="mt-1 text-base font-medium text-[#111827]">
                        {module?.title || module?.name || "Untitled Module"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
