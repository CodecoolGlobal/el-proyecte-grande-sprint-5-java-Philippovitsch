import {axiosInstance, url} from "./axiosInstance"

export function getAllCards() {
  return axiosInstance.get(`${url}/api/cards`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return [];
    });
}

export function saveCard(card) {
  return axiosInstance.post(`${url}/api/cards`, card)
    .then(response => {
      return response.status;
    })
    .catch(error => {
      console.log("Error: " + error);
      return error.response.status;
    });
}

export function deleteCard(latitude, longitude) {
  return axiosInstance.delete(`${url}/api/cards/delete/${latitude},${longitude}`)
  .then(response => {
    return response.status;
  })
  .catch(error => {
    console.log("Error: " + error);
    return error.response.status;
  });
}
