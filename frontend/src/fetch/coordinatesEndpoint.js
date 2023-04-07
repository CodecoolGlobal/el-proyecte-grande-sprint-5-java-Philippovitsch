import {axiosInstance, url} from "./axiosInstance"

export async function getCoordinates(location) {
  const coordinatesRes = await axiosInstance.get(`${url}/api/coordinates/${location}`);
  const data = coordinatesRes.data;
  return (data) ? data : [];
}
