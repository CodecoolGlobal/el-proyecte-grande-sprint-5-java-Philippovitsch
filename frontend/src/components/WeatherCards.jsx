import WeatherCard from "./WeatherCard";
import LinearProgress from '@mui/material/LinearProgress';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import Box from '@mui/material/Box';
import { useState } from "react";
import AddLocation from "./AddLocation";

export default function WeatherCards(props) {
  const [displaySearchField, setDisplaySearchField] = useState(false);

  const toggleSearchField = () => {
    setDisplaySearchField(!displaySearchField);
  };

  return (
    <div className="cardwrapper">
      {props.weatherCards.length === 0 && 
      <Box className="loading-bar">
        <LinearProgress />
      </Box>}
      {props.weatherCards.map((card) => (
        <WeatherCard key={card.id} card={card} handleCloseClick={props.handleCloseClick} displayModal={true}/>
      ))}

      <div className="add-location-icon-wrapper" onClick={toggleSearchField}>
        {!displaySearchField &&
          <AddCircleTwoToneIcon
            className="add-location-icon"
            color="primary" 
            sx={{ fontSize: 45 }}
          />
        }
      </div>
        {displaySearchField &&
          <div className="search-field-wrapper">
            <AddLocation
              fetchLocations={props.fetchLocations}
              addLocation={props.addLocation}
              toggleSearchField={toggleSearchField}
            />
          </div>
        }
    </div>
  );
}