import {axiosInstance, url} from "./axiosInstance"

export function getCurrentWeather(location) {
  return axiosInstance.get(`${url}/api/weather/${location.latitude},${location.longitude}/current`)
    .then(response => {
      const weatherData = response.data;
      return {
        location: location.name,
        country: location.country,
        weatherCode: weatherData.weathercode,
        temperature: weatherData.temperature + " °C",
        windSpeed: weatherData.windspeed + " km/h",
        windDirection: weatherData.winddirection,
      };
    })
    .catch(error => {
      console.log("Error: " + error);
      return {
        location: location.name,
        country: location.country,
        weatherCode: -1,
        temperature: "n.a.",
        windSpeed: "n.a.",
        windDirection: "n.a.",
      };
    });
}

export function getDailyWeather(latitude, longitude, date) {
  return axiosInstance.get(`${url}/api/weather/${latitude},${longitude}/day/${date}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return {
        time: `${year}-${month}-${day}`,
        weathercode: -1,
        temperature_2m_max: "n.a.",
        temperature_2m_min: "n.a.",
        windspeed_10m_max: "n.a."
      };
    });
}

export function getWeatherForecast(latitude, longitude) {
  return axiosInstance.get(`${url}/api/weather/${latitude},${longitude}/forecast`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("Error: " + error);
      return {
        latitude: latitude,
        longitude: longitude,
        time: [],
        temperature_2m: [],
        windspeed_10m: [],
        rain: []
      }
    });
}
