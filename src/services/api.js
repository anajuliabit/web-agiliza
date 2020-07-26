import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export async function auth() {
  const response = await api.get("/accounts/auth");
  return response;
  console.log(response.data);
}
export default api;
