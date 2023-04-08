import {axiosInstance, url} from "./axiosInstance"

export function getFunFact(locationData, testMode = true) {
  const location = locationData.location;
  const country = locationData.country;
  const subpath = (testMode)
    ? `/api/openai/test-fact/${location}/${country}`
    : `/api/openai/fun-fact/${location}/${country}`;

  !testMode && console.log("Fetch fun fact: Test mode OFF!");

  return axiosInstance.get(url + subpath)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return {
        message: "Could not fetch fun fact!"
      };
    });
}
