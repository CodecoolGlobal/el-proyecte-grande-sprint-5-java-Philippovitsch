import axios from "axios";

let id = 1;

const axiosInstance = axios.create({
  withCredentials: true
});

export async function fetchWeatherData(location) {
  const response = await axiosInstance.get(`/api/weather/${location.latitude},${location.longitude}/current`);
  const weatherData = response.data;
  return {
    id: id++,
    location: location.name,
    country: location.country,
    weatherCode: weatherData.weathercode,
    temperature: weatherData.temperature + " °C",
    windSpeed: weatherData.windspeed + " km/h",
    windDirection: weatherData.winddirection,
  }
}

export async function fetchCoordinates(location) {
  const coordinatesRes = await axiosInstance.get(`/api/coordinates/${location}`);
  console.log(coordinatesRes);
  const data = coordinatesRes.data;
  return (data) ? data : [];
}

export async function saveCard(card) {
  const response = await axiosInstance.post(`http://localhost:8080/api/cards`, card);
  return response.status;
}

export async function fetchCards() {
  const cards = await axiosInstance.get(`http://localhost:8080/api/cards`);
  const data = await cards.data;
  return data;
}

export async function deleteCard(latitude, longitude) {
  const response = await axiosInstance.delete(`http://localhost:8080/api/cards/delete/${latitude},${longitude}`)
  return response.data.status;
}

export async function fetchDailyData(latitude, longitude, date) {
  const weatherRes = await axiosInstance.get(`api/weather/${latitude},${longitude}/day/${date}`);
  const weatherData = await weatherRes.data;
  return weatherData;

}

export async function fetchFunFact(locationData, testMode = true) {
  let response;

  if (testMode) {
    response = await fetch(`http://localhost:5000/test-fact`);
  } else {
    response = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": `You are used for a weather app. Please give the user a funny fact about ${locationData.location} in ${locationData.country}`,
        "max_tokens": 100
      })
    });
  }

  if (response !== null) {
    const data = await response.json();
    return data.choices;
  }

}

export async function fetchData(url) {
  const response = await axiosInstance.get(url);
  const data = await response.data;
  return data;
}
