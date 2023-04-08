import {axiosInstance, url} from "./axiosInstance"

export async function getCoordinates(location) {
  return axiosInstance.get(`${url}/api/coordinates/${location}`)
    .then(response => {
      const data = response.data;
      return (data) ? data : [];
    })
    .catch(error => {
      console.log("Error: " + error);
      return [];
    });
}
