import { useEffect, useState } from "react";
import { Snackbar, Alert, Typography } from "@mui/material";
import WeatherCards from "../components/WeatherCards";
import {
  fetchCoordinates,
  fetchWeatherData,
  saveCard,
  fetchCards,
  deleteCard,
} from "../functions/fetch";
import { NavLink } from "react-router-dom";
import { loadWeatherCards } from "../logic/weather-cards";

export default function Home({ userData }) {
  useEffect(() => {
    async function setLocationsAtStart() {
      if (!userData) {
        console.log("not existing");
        return;
      }
      const startLocations = await fetchCards();
      setDefaultLocations(startLocations);
    }
    setLocationsAtStart();
  }, [userData]);

  const [defaultLocations, setDefaultLocations] = useState([]);
  const [weatherCards, setWeatherCards] = useState([]);

  useEffect(() => {
    // loadWeatherCards should be in a "logic" js file in a different layer
    // async function loadWeatherCards() {
    //     if (!userData) {
    //         return;
    //     }

    //     const tempWeatherCards = []
    //     for (const location of defaultLocations) {
    //         const card = await fetchWeatherData(location);
    //         card.latitude = location.latitude;
    //         card.longitude = location.longitude;
    //         tempWeatherCards.push(card);
    //     }
    //     setWeatherCards(tempWeatherCards);
    // };
    const tempWeatherCards = loadWeatherCards(userData, defaultLocations);
    setWeatherCards(tempWeatherCards);
  }, [defaultLocations, userData]);

  const fetchLocations = (location) => {
    return fetchCoordinates(location);
  };

  const alreadyExists = (location) => {
    return (
      defaultLocations.filter(
        (defaultLocation) =>
          defaultLocation.latitude === parseFloat(location.latitude) &&
          defaultLocation.longitude === parseFloat(location.longitude)
      ).length > 0
    );
  };

  const addLocation = async (location, setShowDropDown) => {
    if (alreadyExists(location)) {
      console.log("Location already exists!");
      return;
    }

    const newLocation = {
      name: location.name,
      country: location.country,
      latitude: parseFloat(location.latitude),
      longitude: parseFloat(location.longitude),
    };

    async function handleSaving() {
      const response = await saveCard(newLocation);
      if (response === 200) {
        setSuccessMessage("Successfully saved card!");
        setSuccessOpen(true);
      }
    }

    await handleSaving();
    setDefaultLocations([...defaultLocations, newLocation]);
    setShowDropDown(false);
  };

  function handleCloseClick(latitude, longitude) {
    setDefaultLocations(
      defaultLocations.filter(
        (location) =>
          location.latitude !== latitude && location.longitude !== longitude
      )
    );
    async function handleDeletion() {
      const response = await deleteCard(latitude, longitude);
      if (response === 200) {
        setSuccessMessage("Successfully deleted card!");
        setSuccessOpen(true);
      }
    }
    handleDeletion();
  }

  const [successMessage, setSuccessMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };

  console.log(userData);

  return (
    <div className='App'>
      {userData && (
        <>
          <WeatherCards
            weatherCards={weatherCards}
            handleCloseClick={handleCloseClick}
            fetchLocations={fetchLocations}
            addLocation={addLocation}
          />
          <Snackbar
            open={successOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnack}
          >
            <Alert
              onClose={handleCloseSnack}
              variant='filled'
              severity='success'
              sx={{ width: "100%" }}
            >
              {successMessage}
            </Alert>
          </Snackbar>
        </>
      )}
      {!userData && (
        <div
          className='content-wrapper'
          style={{
            position: "relative",
            marginTop: "30px",
            marginLeft: "20px",
          }}
        >
          <div style={{ marginLeft: "150px" }}>
            <Typography gutterBottom variant='h4' component='div'>
              Welcome to WeatherTracker
            </Typography>
            <Typography>
              Please <NavLink to='/SignUp'>sign up</NavLink> or{" "}
              <NavLink to='/LogIn'>login</NavLink> to continue.
            </Typography>
          </div>
          <img className='logo' src='logo.png' alt='logo'></img>
        </div>
      )}
    </div>
  );
}
