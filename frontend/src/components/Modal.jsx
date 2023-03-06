import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import { fetchFunFact } from '../functions/fetch';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const TEST_MODE = true;

export default function Modal({ closeModal, locationData }) {
  const [funFact, setFunFact] = useState("");

  document.onkeydown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    const getFunFact = async () => {
      const data = await fetchFunFact(locationData, TEST_MODE);
      setFunFact(data[0].text);
      console.log((TEST_MODE) ? "Fetch fun fact: Test mode ON" : "Fetch fun fact: Test mode OFF!");
    }

    getFunFact();
  }, [locationData]);

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(event) => {event.stopPropagation()}} style={{cursor: 'default'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <span className="close" onClick={closeModal}>&times;</span>
            <Typography variant="h3" component="div" sx={{ p: 2 }}>
              {locationData.location}
            </Typography>
          </Grid>
          <Grid item xs={4.3}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItemButton style={{cursor: 'default'}}>
                <ListItemText><b>Country: </b>{locationData.country}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{cursor: 'default'}}>
                <ListItemText><b>Temperature: </b>{locationData.temperature}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{cursor: 'default'}}>
                <ListItemText><b>Weather code: </b>{locationData.weatherCode}</ListItemText>
              </ListItemButton>
              <ListItemButton style={{cursor: 'default'}}>
                <ListItemText><b>Wind direction: </b>{locationData.windDirection}°</ListItemText>
              </ListItemButton>
              <ListItemButton style={{cursor: 'default'}}>
                <ListItemText><b>Wind speed: </b>{locationData.windSpeed}</ListItemText>
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={7.7}>
            <img
              style={{ display: "inline-block", marginTop: 10 }}
              src="https://www.sumomag.at/wp-content/uploads/2016/02/Corporate-Publishing_1-e1455555060462.png"
              alt="placeholder"
              width={450}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className="fun-fact">
              <Typography component="div" sx={{ p: 2 }}>
                <em>Fun fact about <b>{locationData.location} </b>
                <span style={{ color: "#6F7378" }}>(by OpenAI)</span>:</em><br />
                {funFact}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    locationData: PropTypes.object.isRequired
}
