import PropTypes from 'prop-types'
import { useState } from "react";
import { Card, CardContent, Typography, Box, Tooltip } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Modal from "./Modal";

const BACKEND_URL = process.env.PUBLIC_URL;
const COMPASS_ICON = "/symbols/modern_compass_without_needle.svg"
const ARROW_ICON = "/symbols/arrow.svg"
const WIND_ICON = "/symbols/wind.svg"
const WEATHER_ICONS = {
  0: "/symbols/clear.svg",
  1: "/symbols/mainly_clear.svg",
  2: "/symbols/partly_clear.svg",
  3: "/symbols/overcast.svg",
  45: "/symbols/fog.svg",
  48: "/symbols/fog.svg",                     // depositing_rime_fog
  51: "/symbols/light_rain.svg",              // light_drizzle
  53: "/symbols/moderate_rain.svg",           // moderate_drizzle
  55: "/symbols/heavy_rain.svg",              // dense_drizzle
  56: "/symbols/light_freezing_rain.svg",     // light_freezing_drizzle
  57: "/symbols/heavy_freezing_rain.svg",     // dense_freezing_drizzle
  61: "/symbols/light_rain.svg",
  63: "/symbols/moderate_rain.svg",
  65: "/symbols/heavy_rain.svg",
  66: "/symbols/light_freezing_rain.svg",
  67: "/symbols/heavy_freezing_rain.svg",
  71: "/symbols/light_snow_fall.svg",
  73: "/symbols/moderate_snow_fall.svg",
  75: "/symbols/heavy_snow_fall.svg",
  77: "/symbols/moderate_snow_fall.svg",      // snow_grains
  80: "/symbols/light_rain_shower.svg",
  81: "/symbols/moderate_rain_shower.svg",
  82: "/symbols/violent_rain_shower.svg",
  85: "/symbols/light_snow_shower.svg",
  86: "/symbols/heavy_snow_shower.svg",
  95: "/symbols/thunderstorm.svg",
  96: "/symbols/thunderstorm_light_hail.svg",
  99: "/symbols/thunderstorm_heavy_hail.svg",
  unknown: "/symbols/unknown.png"
};
const getWeatherIcon = (weatherCode) => {
  return (weatherCode in WEATHER_ICONS) ? WEATHER_ICONS[weatherCode] : WEATHER_ICONS.unknown;
}

export default function WeatherCard({ card, handleCloseClick }) {
  const [showModal, setShowModal] = useState(false);

  const weatherImageUrl = BACKEND_URL + getWeatherIcon(card.weatherCode);
  const windDirection = card.windDirection + 180;

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <Card sx={{ maxWidth: 345, pt: 3.5, pr: 3.5, pl: 3.5 }}>
        <CardContent>
          {handleCloseClick !== undefined ? <CloseIcon className="closeIcon"
            sx={{mb: -2}}
            data-cardtoclose={card.id}
            onClick={() => { handleCloseClick(card.latitude, card.longitude) }} /> : ''}
          <Typography className="location"
            variant="body1"
            sx={{ textAlign: 'center', mb: 2 }}>
            {card.country}
          </Typography>
          <Tooltip
            title={
              <Typography>{card.location}</Typography>
            }
            placement="top">
            <Typography className="location"
              variant="h4" color="primary"
              sx={{ textAlign: 'center', mb: 2 }}
              style={{ cursor: 'pointer' }}
              onClick={openModal}
            >
              {(card.location.length > 12) ? card.location.substring(0, 12) + "..." : card.location}
            </Typography>
          </Tooltip>
          <Typography className="temperature"
            variant="body1"
            sx={{
              textAlign: 'center', mb: 2,
              fontSize: 24
            }}>
            {card.temperature}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              className="weather-icon"
              src={weatherImageUrl}
              alt='weather icon'
              width='100' />
            <br />
            <br />
          </Box>
          <Box
            className="compass-container"
            sx={{ textAlign: 'center' }}>
            <img
              className="compass, compass-icon"
              src={COMPASS_ICON}
              alt='compass icon'
              width='100' />
            <img
              className="compass, arrow-icon"
              src={ARROW_ICON}
              alt='compass icon'
              width='40'
              style={{ rotate: windDirection + "deg" }} />
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
            {card.windSpeed}
          </Typography>
        </CardContent>
      </Card>
      {showModal && <Modal closeModal={closeModal} locationData={card} weatherIcon={getWeatherIcon(card.weatherCode)}/>}
    </div>
  );
}

WeatherCard.propTypes = {
  card: PropTypes.object.isRequired,
  handleCloseClick: PropTypes.func.isRequired
}
