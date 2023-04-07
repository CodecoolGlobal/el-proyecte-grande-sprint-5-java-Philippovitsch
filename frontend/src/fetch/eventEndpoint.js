import {axiosInstance, url} from "./axiosInstance"

export async function getAllEvents() {
  const response = await axiosInstance.get(`${url}/api/events`);
  const eventData = response.data;
  return eventData;
}

export async function saveEvent(calendarEvent) {
  const response = await axiosInstance.post(`${url}/api/events`, calendarEvent);
  return response.status;
}
