import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

const applicationClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function submitApplication(payload) {
  const response = await applicationClient.post("/applications/submit", payload);
  return response.data;
}

export async function verifyInviteCode(payload) {
  const response = await applicationClient.post("/applications/verify-invite", payload);
  return response.data;
}

export async function resendInviteCode(payload) {
  const response = await applicationClient.post("/applications/resend-invite", payload);
  return response.data;
}

export async function getApplicantByInvite(payload) {
  const response = await applicationClient.post("/applications/verify-invite", payload);
  return response.data;
}

export async function completeApplicantRegistration(payload) {
  const response = await applicationClient.post("/applications/complete-registration", payload);
  return response.data;
}

export async function verifyAccountEmail(payload) {
  const response = await applicationClient.post("/applications/verify-email", payload);
  return response.data;
}

export async function resendAccountVerificationEmail(payload) {
  const response = await applicationClient.post("/applications/resend-email-verification", payload);
  return response.data;
}
