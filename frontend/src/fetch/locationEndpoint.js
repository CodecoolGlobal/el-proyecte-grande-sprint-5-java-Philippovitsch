import {axiosInstance, url} from "./axiosInstance"

export function getGeolocation(latitude, longitude) {
  return axiosInstance.get(`${url}/api/location/${latitude},${longitude}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return {
        display_name: "unknown"
      };
    });
}

export function getLocalTime(latitude, longitude) {
  return axiosInstance.get(`${url}/api/location/${latitude},${longitude}/time`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return {
        time: "unknown"
      };
    });
}
