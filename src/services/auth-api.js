import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const userAuthentication = async (data) => {
  let response = await api.post("/auth/login/", data)
  return response.data
}