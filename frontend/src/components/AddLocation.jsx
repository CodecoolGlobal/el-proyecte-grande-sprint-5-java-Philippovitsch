import { useState } from 'react'
import PropTypes from 'prop-types'

import { OutlinedInput } from "@mui/material";

import LocationDropDown from './LocationDropDown';

export default function AddLocation({ fetchLocations, addLocation, toggleSearchField }) {
const [showDropDown, setShowDropDown] = useState(false);
const [locations, setLocations] = useState([]);

  const getLocations = async (input) => {
    if (input.length < 2) {
      setShowDropDown(false);
      return;
    }
    const locations = await fetchLocations(input);
    setLocations(locations);
    setShowDropDown(true);
  }

  const onAdd = (location) => {
    addLocation(location, setShowDropDown);
    toggleSearchField();
  }

  const closeSearchField = (event) => {
    if (event.code === "Escape") {
      setShowDropDown(false);
      toggleSearchField();
    }
  };

  return (
    <div>
      <div className='add-location'>
        <OutlinedInput
          autoFocus
          className='location-textfield'
          placeholder="Add location"
          onChange={(event) => getLocations(event.target.value)}
          onKeyDown={closeSearchField}
        />
        {showDropDown && <LocationDropDown locations={locations} onAdd={onAdd}/>}
      </div>
    </div>
  )
}

AddLocation.propTypes = {
  fetchLocations: PropTypes.func.isRequired,
  addLocation: PropTypes.func.isRequired
}
