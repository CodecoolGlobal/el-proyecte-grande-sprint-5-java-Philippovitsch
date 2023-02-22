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
      latitude: 48.20849,
      longitude: 16.37208
    },
    {
      name: "Paris",
      latitude: 48.85341,
      longitude: 2.3488
    },
    {
      name: "Amsterdam",
      latitude: 52.37403,
      longitude: 4.88969
    },
    {
      name: "London",
      latitude: 51.50853,
      longitude: -0.12574
    },
    {
      name: "Sydney",
      latitude: -33.86785,
      longitude: 151.20732
    },
    {
      name: "New York",
      latitude: 40.71427,
      longitude: -74.00597
    }
  ]);

  const [weatherCards, setWeatherCards] = useState([]);

  useEffect(() => {
    async function loadWeatherCards() {
      const tempWeatherCards = []
      for (const location of defaultLocations) {
        const card = await fetchWeatherData(location.name, location.latitude, location.longitude);
        tempWeatherCards.push(card);
      }
      setWeatherCards(tempWeatherCards);
    };
    loadWeatherCards();
  }, [defaultLocations]);

  const fetchLocations = (location) => {
    return fetchCoordinates(location);
  }

  function handleCloseClick(name) {
    setDefaultLocations(defaultLocations.filter(location => location.name != name));
  }

  return (
    <div className='App'>
      <Header title='WeatherTracker' />
      <AddLocation fetchLocations={fetchLocations}/>
      <WeatherCards weatherCards={weatherCards} handleCloseClick={handleCloseClick}/>
      <Footer />
    </div>
  );
}
