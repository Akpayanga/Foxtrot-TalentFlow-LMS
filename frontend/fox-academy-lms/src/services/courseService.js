import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

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
