import {axiosInstance, url} from "./axiosInstance"

export async function getAllUsers() {
  const response = await axiosInstance.get(`${url}/api/admin`);
  const data = response.data;
  return data;
}

export async function changeUserRole(username, newRole) {
  const response = await axiosInstance.put(`${url}/api/admin/${username}/role/${newRole}`);
  return response.status;
}

export async function deleteUser(username) {
  const response = await axiosInstance.delete(`${url}/api/admin/${username}/delete`);
  return response.status;
}
