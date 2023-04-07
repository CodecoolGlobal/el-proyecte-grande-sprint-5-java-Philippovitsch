import {axiosInstance, url} from "./axiosInstance"

export async function getGeolocation(latitude, longitude) {
  const response = await axiosInstance.get(`${url}/api/location/${latitude},${longitude}`);
  const data = response.data;
  return data;
}

export async function getLocalTime(latitude, longitude) {
  const response = await axiosInstance.get(`${url}/api/location/${latitude},${longitude}/time`);
  const data = response.data;
  return data;
}
