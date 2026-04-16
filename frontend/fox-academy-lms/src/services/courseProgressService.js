import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

const courseProgressClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function getAuthHeaders() {
  const token = localStorage.getItem("authToken");

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}

export async function checkCourseProgress(courseId) {
  const response = await courseProgressClient.get(`/course-progress/get/${courseId}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
}

export async function markLectureViewed(payload) {
  const response = await courseProgressClient.post(
    "/course-progress/mark-lecture/viewed",
    payload,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
}

export async function resetCourseProgress(payload) {
  const response = await courseProgressClient.post(
    "/course-progress/reset-progress",
    payload,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
}
