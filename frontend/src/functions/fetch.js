let id = 1;

export async function fetchWeatherData(location) {
  const weatherRes = await fetch(`/api/weather/current/${location.latitude},${location.longitude}`);
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
