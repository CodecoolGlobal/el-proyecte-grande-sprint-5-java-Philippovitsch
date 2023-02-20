async function fetchWeather(location) {
  const coordinatesRes = await fetch(`/api/coordinates/${location}`);
  const coordinatesData = await coordinatesRes.json();
  const latitude = coordinatesData[0].latitude;
  const longitude = coordinatesData[0].longitude;
  const weatherRes = await fetch(
    `/api/weather/current/${latitude},${longitude}`
  );
  const weatherData = await weatherRes.json();
  return [
    {
      id: 1,
      location: location,
      weatherCode: weatherData.weathercode,
      temperature: weatherData.temperature + " °C",
      windSpeed: weatherData.windspeed + " km/h",
      windDirection: weatherData.winddirection,
    },
  ];
}
