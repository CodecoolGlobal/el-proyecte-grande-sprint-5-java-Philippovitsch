import React from 'react'

export default function LocationDropDown({ locations }) {
  return (
    <div>
      <ul>
        { locations.map((location, id) => (
            <li key={id}>{location.name} <em>({location.country})</em></li>
        ))}
      </ul>
    </div>
  )
}
