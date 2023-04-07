import {axiosInstance, url} from "./axiosInstance"

export async function getCurrentWeather(location) {
  const response = await axiosInstance.get(`${url}/api/weather/${location.latitude},${location.longitude}/current`);
  const weatherData = response.data;
  return {
    location: location.name,
    country: location.country,
    weatherCode: weatherData.weathercode,
    temperature: weatherData.temperature + " °C",
    windSpeed: weatherData.windspeed + " km/h",
    windDirection: weatherData.winddirection,
  }
}

export async function getDailyWeather(latitude, longitude, date) {
  const weatherRes = await axiosInstance.get(`${url}/api/weather/${latitude},${longitude}/day/${date}`);
  const weatherData = weatherRes.data;
  return weatherData;
}

export async function getWeatherForecast(latitude, longitude) {
  const response = await axiosInstance.get(`${url}/api/weather/${latitude},${longitude}/forecast`);
  const data = response.data;
  return data;
}
