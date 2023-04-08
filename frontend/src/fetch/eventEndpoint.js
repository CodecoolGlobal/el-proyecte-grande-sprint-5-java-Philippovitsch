import {axiosInstance, url} from "./axiosInstance"

export function getAllEvents() {
  return axiosInstance.get(`${url}/api/events`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return [];
    });
}

export function saveEvent(calendarEvent) {
  return axiosInstance.post(`${url}/api/events`, calendarEvent)
    .then(response => {
        return response.status;
    })
    .catch(error => {
      console.log("Error: " + error);
      return error.response.status;
    })
}
