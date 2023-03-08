import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";
import { fetchCoordinates, fetchWeatherData, saveCard, fetchCards } from "./functions/fetch";

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
    saveCard(newLocation);
    setDefaultLocations([...defaultLocations, newLocation]);
    setShowDropDown(false);
  }

  function handleCloseClick(name) {
    setDefaultLocations(defaultLocations.filter(location => location.name !== name));
  }

  return (
    <div className='App'>
      <Header title='WeatherTracker' fetchLocations={fetchLocations} addLocation={addLocation} />
      <WeatherCards weatherCards={weatherCards} handleCloseClick={handleCloseClick}/>
      <Footer />
    </div>
  );
}
