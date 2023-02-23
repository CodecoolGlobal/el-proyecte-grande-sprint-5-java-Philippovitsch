import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Modal({ closeModal, locationData }) {

  document.onkeydown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

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
      </div>
    </div>
  )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    locationData: PropTypes.object.isRequired
}
