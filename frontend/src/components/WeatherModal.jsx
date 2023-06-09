import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

import { ForecastChart } from './ForecastChart';
import { getFunFact } from '../fetch/openAiEndpoint';
import { getLocalTime } from '../fetch/locationEndpoint';

const TEST_MODE = true;

export default function WeatherModal({ closeModal, locationData, weatherIcon }) {
  const [funFact, setFunFact] = useState("");
  const [localTime, setLocalTime] = useState("");

  document.onkeydown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    const fetchLocalTime = async () => {
      const latitude = locationData.latitude;
      const longitude = locationData.longitude;
      const localTime = await getLocalTime(latitude, longitude);
      setLocalTime(`${localTime.time}`);
    }

    const fetchFunFact = async () => {
      const data = await getFunFact(locationData, TEST_MODE);
      setFunFact(data.message);
    }

    fetchLocalTime();
    fetchFunFact();
  }, [locationData]);

  const getWeatherState = () => {
    const weatherState = weatherIcon.substring(weatherIcon.lastIndexOf("/") + 1, weatherIcon.lastIndexOf("."));
    return weatherState.substring(0, 1).toUpperCase() + weatherState.substring(1).toLowerCase().replace("_", " ");
  }

  const getWindDirection = () => {
    const angle = locationData.windDirection + 180;
    const directions = ['↑ North', '↗ North-East', '→ East', '↘ South-East', '↓ South', '↙ South-West', '← West', '↖ North-West'];
    return directions[Math.round(angle / 45) % 8];
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(event) => { event.stopPropagation() }} style={{ cursor: 'default' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <span className="close" onClick={closeModal}>&times;</span>
            <Typography variant="h3" component="div" sx={{ p: 2 }}>
              {locationData.location} <em>({locationData.country})</em>
            </Typography>
          </Grid>
          <Grid item xs={4.3}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: 0 }}>
              <ListItemButton style={{ cursor: 'default' }}>
                <ListItemText><b>Local time: </b>{localTime}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{ cursor: 'default' }}>
                <ListItemText><b>Temperature: </b>{locationData.temperature}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{ cursor: 'default' }}>
                <ListItemText><b>Weather: </b>{getWeatherState()}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{ cursor: 'default' }}>
                <ListItemText><b>Wind direction: </b>{getWindDirection()}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{ cursor: 'default' }}>
                <ListItemText><b>Wind speed: </b>{locationData.windSpeed}</ListItemText>
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={7.7} style={{ paddingTop: 0, paddingLeft: 0 }}>
            <ForecastChart locationData={locationData} />
          </Grid>
          <Grid item xs={12}>
            <Box className="fun-fact">
              <Typography component="div" sx={{ p: 2 }}>
                <em>Fun fact about <b>{locationData.location} </b>
                  <span style={{ color: "#6F7378" }}>(by OpenAI)</span>:</em><br />
                {(funFact === "")
                  ? <CircularProgress sx={{ mt: 2 }}/>
                  : funFact
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

WeatherModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  locationData: PropTypes.object.isRequired,
  weatherIcon: PropTypes.string.isRequired,
}
