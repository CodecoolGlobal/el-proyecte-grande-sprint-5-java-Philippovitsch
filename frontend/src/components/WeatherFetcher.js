import React, { useEffect } from 'react';

export default function WeatcherFetcher(location, setWeatherCards) {
    useEffect(() => {
        const fetchWeather = async () =>  {
            const coordinatesRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&language=de`)
            const coordinatesData = await coordinatesRes.json()
            const coordinates = {
                name: coordinatesData.results[0].name,
                latitude: coordinatesData.results[0].latitude,
                longitude: coordinatesData.results[0].longitude
            }
            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,weathercode,windspeed_10m&current_weather=true`)
            const weatherData = await weatherRes.json()
            setWeatherCards([{
                id: 1,
                location: location,
                weatherCode: weatherData.current_weather.weathercode,
                temperature: weatherData.current_weather.temperature,
                windSpeed: weatherData.current_weather.windspeed
            }])
        }
        fetchWeather()
    }, [location])
}