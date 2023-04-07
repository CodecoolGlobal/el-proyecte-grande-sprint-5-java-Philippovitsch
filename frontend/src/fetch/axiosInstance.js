import axios from "axios";

export const url = "http://localhost:8080"

export const axiosInstance = axios.create({
  withCredentials: true
});
