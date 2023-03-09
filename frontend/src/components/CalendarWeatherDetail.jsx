import { useEffect, useState } from "react";
import { fetchData } from "../functions/fetch";
import WeatherCard from "./WeatherCard"

export default function CalendarWeatherDetail( {chosenDate, weatherData} ) {
    const [geolocation, setGeolocation] = useState("unknown");  
  
    useEffect(() => {
      const showCurrentLocation = async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geolocation = await fetchData(`/api/location/${latitude},${longitude}`);
        setGeolocation(`${geolocation.display_name}`);
      }
  
      navigator.geolocation.getCurrentPosition(showCurrentLocation);
    }, [])


    const cardData = {
        country: (geolocation !== "unknown") ? geolocation.split(",")[1] : "Austria",
        location: (geolocation !== "unknown") ? geolocation.split(",")[0] : "Vienna",
        temperature: weatherData !== undefined ? weatherData.temperature_2m_max[0] : 0,
        weatherCode: weatherData !== undefined ? weatherData.weathercode[0] : 0,
        windSpeed:weatherData !== undefined ? weatherData.windspeed_10m_max[0] : 0
    }
    return (
        <div>
            {weatherData !== undefined ? <WeatherCard card={cardData}/> : ''}
        </div>
  )
}
