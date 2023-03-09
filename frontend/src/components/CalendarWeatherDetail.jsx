import WeatherCard from "./WeatherCard"

export default function CalendarWeatherDetail( {chosenDate, weatherData} ) {
    const cardData = {
        country: "Austria",
        location: "Vienna",
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
