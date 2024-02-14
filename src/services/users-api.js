import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const findAllUsers = async () => {
    let response = await api.get("/users")
    return response.data
}

export const createUser = async (data) => {
  let response = await api.post("/users/", data)
  return response.data
}

export const updateUser = async (data, id) => {
  let response = await api.patch(`/users/${id}`, data)
  return response.data
}