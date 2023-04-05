import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { useEffect, useState } from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { fetchData } from '../functions/fetch';
import { fetchDailyData } from '../functions/fetch';
import { WIND_ICON, getWeatherIcon } from './WeatherCard';

export default function EventModal({ closeModal, addCalendarEvent, date }) {

  const [geolocation, setGeolocation] = useState("unknown");
  const [eventName, setEventName] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(undefined);
  const [timestamp, setTimestamp] = useState();

  const country = (geolocation !== "unknown") ? geolocation.split(",")[1] : "Austria";
  const location = (geolocation !== "unknown") ? geolocation.split(",")[0] : "Vienna";

  useEffect(() => {
    const getWeatherForecast = async (position) => {
      if (timestamp === undefined) {
        setTimestamp(date);
      }

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const geolocation = await fetchData(`/api/location/${latitude},${longitude}`);
      setGeolocation(`${geolocation.display_name}`);

      if (timestamp !== undefined) {
        const year = timestamp.getFullYear();
        const month = timestamp.getMonth() + 1;
        const day = timestamp.getDate();
        const selectedDate = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`
        const weatherForecast = await fetchDailyData(latitude, longitude, selectedDate);
        setWeatherForecast(weatherForecast);
      }
    };

    navigator.geolocation.getCurrentPosition(getWeatherForecast);
  }, [date, timestamp]);

  document.onkeydown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  const changeEventName = (event) => {
    setEventName(event.target.value);
  };

  const onAdd = async () => {
    const calendarEvent = {
      name: eventName,
      country: country,
      location: location,
      timestamp: new Date(timestamp),
      temperature_2m_max: parseFloat(weatherForecast.temperature_2m_max[0]),
      temperature_2m_min: parseFloat(weatherForecast.temperature_2m_min[0]),
      weathercode: parseInt(weatherForecast.weathercode[0]),
      windspeed_10m_max: parseFloat(weatherForecast.windspeed_10m_max[0])
    }
    await addCalendarEvent(calendarEvent);
    closeModal();
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(event) => { event.stopPropagation() }} style={{ cursor: 'default' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <span className="close" onClick={closeModal}>&times;</span>
            <Typography gutterBottom variant="h4" component="div" sx={{ mt: 4, textAlign: "center" }}>
              New Event:
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ mt: 4 }}>
            <TextField
              required
              focused
              id="eventName"
              label="Event Name"
              type="text"
              helperText="Please enter an Event."
              onChange={changeEventName}
              sx={{ mt: 2, ml: 1, width: 350 }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                required
                ampm={false}
                value={dayjs(timestamp)}
                onChange={(event) => setTimestamp(new Date(event))}
                id="date-time"
                label="Date & Time"
                slotProps={{
                  textField: {
                    focused: true,
                    helperText: 'Please enter Date and Time',
                  },
                }}
                sx={{ mt: 3,  ml: 1, width: 350 }}
              />
            </LocalizationProvider>
            <Button variant="contained" onClick={onAdd} sx={{ mt: 6,  ml: 1 }}>SUBMIT</Button>
          </Grid>
          <Grid item xs={6} sx={{ mt: 2 }}>
            {weatherForecast &&
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
                    src={getWeatherIcon(weatherForecast.weathercode[0])}
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
                    <i>{country + ", " + location}</i>
                </Typography> 
              </>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

EventModal.propTypes = {
  closeModal: PropTypes.func.isRequired
}
