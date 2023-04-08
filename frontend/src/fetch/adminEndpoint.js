import {axiosInstance, url} from "./axiosInstance"

export function getAllUsers() {
  return axiosInstance.get(`${url}/api/admin`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return [];
    });
}

export function changeUserRole(username, newRole) {
  return axiosInstance.put(`${url}/api/admin/${username}/role/${newRole}`)
    .then(response => {
      return response.status;
    })
    .catch(error => {
      console.log("Error: " + error);
      return error.response.status;
    });
}

export function deleteUser(username) {
  return axiosInstance.delete(`${url}/api/admin/${username}/delete`)
    .then(response => {
      return response.status;
    })
    .catch(error => {
      console.log("Error: " + error);
      return error.response.status;
    })
}
