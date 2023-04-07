import PropTypes from 'prop-types'

import { MenuItem } from "@mui/material";

export default function LocationDropDown({ locations, onAdd }) {
  return (
    <div className='location-drop-down'>
      {locations.map((location, id) => (
        <MenuItem
          onClick={() => onAdd(location)}
          style={{cursor: "pointer"}}
          key={id}
        >
          {location.name}&nbsp;<em>({location.country})</em>
        </MenuItem>
      ))}
    </div>
  )
}

LocationDropDown.propTypes = {
  locations: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
}
