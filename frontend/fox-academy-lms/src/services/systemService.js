import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const systemClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getServerHealth() {
  const response = await systemClient.get("/health");
  return response.data;
}
