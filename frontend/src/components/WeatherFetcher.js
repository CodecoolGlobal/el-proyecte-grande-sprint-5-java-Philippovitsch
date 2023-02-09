import { useEffect } from 'react';

export default function WeatherFetcher(location, setWeatherCards) {
    useEffect(() => {
        const fetchWeather = async () =>  {
            const coordinatesRes = await fetch(`/api/coordinates/${location}`)
            const coordinatesData = await coordinatesRes.json()
            const latitude = coordinatesData[0].latitude
            const longitude = coordinatesData[0].longitude
            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            const weatherData = await weatherRes.json()
            setWeatherCards([{
                id: 1,
                location: location,
                weatherCode: weatherData.current_weather.weathercode,
                temperature: weatherData.current_weather.temperature + " °C",
                windSpeed: weatherData.current_weather.windspeed + " km/h"
            }])
        }
        fetchWeather()
    }, [location])
}