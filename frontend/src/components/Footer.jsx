import { useEffect, useState } from "react";

import { Typography, Box, Container } from "@mui/material"

import { getGeolocation, getLocalTime } from "../fetch/locationEndpoint";

export default function Footer(props) {
  const [geolocation, setGeolocation] = useState("unknown");
  const [localTime, setLocalTime] = useState("unknown");

  useEffect(() => {
    const showCurrentLocation = async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const geolocation = await getGeolocation(latitude, longitude)
      setGeolocation(`${geolocation.display_name}`);
    }

    const showCurrentTime = async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const localTime = await getLocalTime(latitude, longitude)
      setLocalTime(`${localTime.time}`);
    }

    navigator.geolocation.getCurrentPosition(showCurrentLocation);
    navigator.geolocation.getCurrentPosition(showCurrentTime);
  }, [])

  const geolocationAlert = "Enable location services to see current location and time!";

  return (
    <footer>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            <span id="geolocation" title={ (geolocation === "unknown") ? geolocationAlert : "" }>Current location: <b>{ geolocation }</b> - </span>
            <span id="local-time" title={ (localTime === "unknown") ? geolocationAlert : "" }>Local time: <b>{ localTime }</b></span>
          </Typography>
          <Typography variant="body1">
            {props.title}
          </Typography>
        </Container>
      </Box>
    </footer>
  )
}

Footer.defaultProps = {
    title: "© Umbrella Corporation 2023"
}
