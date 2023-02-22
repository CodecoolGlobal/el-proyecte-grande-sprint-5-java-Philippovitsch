import PropTypes from 'prop-types'
import React from 'react'

export default function LocationDropDown({ locations, onAdd }) {
  return (
    <div>
      <ul>
        { locations.map((location, id) => (
            <li key={id} onClick={() => onAdd(location)} style={{cursor: "pointer"}}>
              {location.name} <em>({location.country})</em>
            </li>
        ))}
      </ul>
    </div>
  )
}

LocationDropDown.propTypes = {
  locations: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
}
