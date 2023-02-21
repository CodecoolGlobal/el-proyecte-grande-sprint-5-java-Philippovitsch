import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";
import { fetchWeather } from "./functions/fetch";

export default function App() {
  const location = "Vienna";
  const [weatherCards, setWeatherCards] = useState([]);

  useEffect(() => {
    async function updateWeatherCards() {
      const card = await fetchWeather(location);
      setWeatherCards(card);
    }
    updateWeatherCards();
  }, [location]);

  return (
    <div className='App'>
      <Header title='Weather Tracker' />
      <WeatherCards weatherCards={weatherCards} />
      <Footer />
    </div>
  );
}
