import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
        <span className="close" onClick={closeModal}>&times;</span>
        <Typography variant="h3" component="div" sx={{ p: 2 }}>
            {locationData.location}
          </Typography>
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

        <Box className="fun-fact">
          <Typography component="div" sx={{ p: 2 }}>
            <em>Fun fact about <b>{locationData.location} </b>
            <span style={{ color: "#6F7378" }}>(by OpenAI)</span>:</em><br />
            {funFact}
          </Typography>
        </Box>
      </div>
    </div>
  )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    locationData: PropTypes.object.isRequired
}
