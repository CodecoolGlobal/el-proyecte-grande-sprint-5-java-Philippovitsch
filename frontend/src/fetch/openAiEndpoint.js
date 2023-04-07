import {axiosInstance, url} from "./axiosInstance"

export async function getFunFact(locationData, testMode = true) {
  const location = locationData.location;
  const country = locationData.country;
  let response;
  if (testMode) {
    response = await axiosInstance.get(`${url}/api/openai/test-fact/${location}/${country}`);
  } else {
    response = await axiosInstance.get(`${url}/api/openai/fun-fact/${location}/${country}`);
    console.log("Fetch fun fact: Test mode OFF!");
  }
  return response.data
}
