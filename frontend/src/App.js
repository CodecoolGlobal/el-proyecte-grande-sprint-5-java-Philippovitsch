import { useEffect, useState } from "react";

import Header from "./components/Header";
import AddLocation from "./components/AddLocation"
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";
import { fetchCoordinates, fetchWeatherData } from "./functions/fetch";

export default function App() {
  const [defaultLocations, setDefaultLocations] = useState([
    {
      name: "Vienna",
      country: "Austria",
      latitude: 48.20849,
      longitude: 16.37208
    },
    {
      name: "Paris",
      country: "France",
      latitude: 48.85341,
      longitude: 2.3488
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      latitude: 52.37403,
      longitude: 4.88969
    },
    {
      name: "London",
      country: "United Kingdom",
      latitude: 51.50853,
      longitude: -0.12574
    },
    {
      name: "Sydney",
      country: "Australia",
      latitude: -33.86785,
      longitude: 151.20732
    },
    {
      name: "New York",
      country: "USA",
      latitude: 40.71427,
      longitude: -74.00597
    }
  ]);

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

  const addLocation = (location) => {
    if (defaultLocations.filter(defaultLocation => defaultLocation.name === location.name).length > 0) {
      console.log("Location already exists!");
      return;
    }

    const newLocation = {
      name: location.name,
      country: location.country,
      latitude: location.latitude,
      longitude: location.longitude
    }
    setDefaultLocations([...defaultLocations, newLocation]);
  }

  function handleCloseClick(name) {
    setDefaultLocations(defaultLocations.filter(location => location.name !== name));
  }

  return (
    <div className='App'>
      <Header title='WeatherTracker' />
      <AddLocation fetchLocations={fetchLocations} addLocation={addLocation}/>
      <WeatherCards weatherCards={weatherCards} handleCloseClick={handleCloseClick}/>
      <Footer />
    </div>
  );
}
