let id = 1;

export async function fetchWeatherData(location) {
  const weatherRes = await fetch(`/api/weather/${location.latitude},${location.longitude}/current`);
  const weatherData = await weatherRes.json();
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
  const coordinatesRes = await fetch(`/api/coordinates/${location}`);
  const data = await coordinatesRes.text()
  return (data) ? await JSON.parse(data) : [];
}

export async function saveCard(card) {
  const response = await fetch(`http://localhost:8080/api/cards`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(card)
  })
  return response.status;
}

export async function fetchCards() {
  const cards = await fetch(`http://localhost:8080/api/cards`);
  const data = await cards.json();
  return data;
}

export async function deleteCard(latitude, longitude) {
  const response = await fetch(`http://localhost:8080/api/cards/delete/${latitude},${longitude}`, {
    method: "DELETE"
  })
  return response.status;
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
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
