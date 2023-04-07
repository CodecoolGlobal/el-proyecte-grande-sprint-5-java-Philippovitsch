import {axiosInstance, url} from "./axiosInstance"

export async function getAllCards() {
  const cards = await axiosInstance.get(`${url}/api/cards`);
  const data = cards.data;
  return data;
}

export async function saveCard(card) {
  const response = await axiosInstance.post(`${url}/api/cards`, card);
  return response.status;
}

export async function deleteCard(latitude, longitude) {
  const response = await axiosInstance.delete(`${url}/api/cards/delete/${latitude},${longitude}`)
  return response.data.status;
}
