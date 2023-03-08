import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";
import { fetchCoordinates, fetchWeatherData, saveCard, fetchCards, deleteCard } from "./functions/fetch";

export default function App() {

  useEffect(() => {
    async function setLocationsAtStart() {
      const startLocations = await fetchCards();
      setDefaultLocations(startLocations);
    };
    setLocationsAtStart();
  }, [])

  const [defaultLocations, setDefaultLocations] = useState([]);
  const [weatherCards, setWeatherCards] = useState([]);

  useEffect(() => {
    async function loadWeatherCards() {
      const tempWeatherCards = []
      for (const location of defaultLocations) {
        const card = await fetchWeatherData(location);
        card.latitude = location.latitude;
        card.longitude = location.longitude;
        tempWeatherCards.push(card);
      }
      setWeatherCards(tempWeatherCards);
    };
    loadWeatherCards();
  }, [defaultLocations]);

  const fetchLocations = (location) => {
    return fetchCoordinates(location);
  }

  const alreadyExists = (location) => {
    return defaultLocations.filter(defaultLocation =>
      defaultLocation.latitude === location.latitude &&
      defaultLocation.longitude === location.longitude
    ).length > 0
  }

  const addLocation = (location, setShowDropDown) => {
    if (alreadyExists(location)) {
      console.log("Location already exists!");
      return;
    }

    const newLocation = {
      name: location.name,
      country: location.country,
      latitude: location.latitude,
      longitude: location.longitude
    }

    async function handleSaving() {
      const response = await saveCard(newLocation);
      if (response === 200) {
        setSuccessMessage("Successfully saved card!");
        setSucessOpen(true);
    };
    }

    handleSaving();
    setDefaultLocations([...defaultLocations, newLocation]);
    setShowDropDown(false);
  }

  function handleCloseClick(latitude, longitude) {
    setDefaultLocations(defaultLocations.filter(location => location.latitude !== latitude && location.longitude !== longitude));
    async function handleDeletion() {
      const response = await deleteCard(latitude, longitude);
      if (response === 200) {
        setSuccessMessage("Successfully deleted card!");
        setSucessOpen(true);
      };
    }
    handleDeletion();
  }

  const [sucessMessage, setSuccessMessage] = useState("");
  const [sucessOpen, setSucessOpen] = useState(false);

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSucessOpen(false);
  };


  return (
    <div className='App'>
      <Header title='WeatherTracker' fetchLocations={fetchLocations} addLocation={addLocation} />
      <WeatherCards weatherCards={weatherCards} handleCloseClick={handleCloseClick}/>
      <Snackbar open={sucessOpen} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} variant="filled" severity="success" sx={{ width: '100%' }}>
          {sucessMessage}
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}
