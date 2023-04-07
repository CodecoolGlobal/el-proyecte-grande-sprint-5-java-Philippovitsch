import { Box, Typography } from "@mui/material";

import { WIND_ICON, getWeatherIcon } from "./WeatherCard";

export default function WeatherForecast({ weatherForecast, country, location }) {
  return (
    <>
      <Typography className="temperature"
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: 2, mt: 2,
          fontSize: 20
        }}>
          Min: <b>{weatherForecast.temperature_2m_min}{(weatherForecast.temperature_2m_min[0] !== "n.a.") && "°C"}</b> / 
          Max: <b>{weatherForecast.temperature_2m_max}{(weatherForecast.temperature_2m_min[0] !== "n.a.") && "°C"}</b>
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <img
          className="weather-icon"
          src={getWeatherIcon(weatherForecast.weathercode)}
          alt='weather icon'
          width='100' />
        <br />
        <br />
      </Box>
      <Box
        sx={{ textAlign: 'center', mb: 2 }}>
        <img
          className="wind-icon"
          src={WIND_ICON}
          alt="wind icon" />
      </Box>
      <Typography className="windspeed"
        variant="body1"
        sx={{ textAlign: 'center', mb: 2 }}>
        {weatherForecast.windspeed_10m_max}{(weatherForecast.windspeed_10m_max[0] !== "n.a.") && " km/h"}
      </Typography>
      <Typography className="location"
        variant="body1"
        sx={{ textAlign: 'center', mb: 2 }}>
          <i>{location + ", " + country}</i>
      </Typography> 
    </>
  )
}
