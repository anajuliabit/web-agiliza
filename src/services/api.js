import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export async function auth() {
  return await api.get("/accounts/auth");
}

export async function getToken(code) {
  return await api.get(`/auth/token?code=${code}`);
}

export default api;
