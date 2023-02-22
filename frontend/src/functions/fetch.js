let id = 1;

export async function fetchWeatherData(location, latitude, longitude) {
  const weatherRes = await fetch(`/api/weather/current/${latitude},${longitude}`);
  const weatherData = await weatherRes.json();
  return {
      id: id++,
      location: location,
      weatherCode: weatherData.weathercode,
      temperature: weatherData.temperature + " °C",
      windSpeed: weatherData.windspeed + " km/h",
      windDirection: weatherData.winddirection,
    }
}

export async function fetchCoordinates(location) {
  const coordinatesRes = await fetch(`/api/coordinates/${location}`);
  const coordinatesData = await coordinatesRes.json();
  return coordinatesData;
}
