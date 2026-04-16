import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/v1";

const courseClient = axios.create({
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

export async function listAllCourses() {
  const response = await courseClient.get("/courses/", {
    headers: getAuthHeaders(),
  });
  return response.data;
}

export async function getCourseById(courseId) {
  const response = await courseClient.get(`/courses/${courseId}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
}
