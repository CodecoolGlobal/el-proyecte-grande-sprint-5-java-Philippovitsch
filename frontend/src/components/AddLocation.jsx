import PropTypes from 'prop-types'
import { useState } from 'react'
import LocationDropDown from './LocationDropDown';

export default function AddLocation({ fetchLocations, addLocation }) {
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
    addLocation(location);
  }

  return (
    <div>
      <div className='add-location'>
        <label>Add location: </label>
        <input
          type="text"
          placeholder=""
          onChange={(event) => getLocations(event.target.value)}
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
