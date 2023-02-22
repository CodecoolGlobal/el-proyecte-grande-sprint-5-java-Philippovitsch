import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";
import { fetchWeather } from "./functions/fetch";

export default function App() {
  const locations = ["Vienna", "Linz", "Bregenz", "Berlin", "Paris"];
  const [weatherCards, setWeatherCards] = useState([]);

  useEffect(() => {
    async function updateWeatherCards() {
      const temporaryWeatherCards = [];
      for (const location of locations) {
        const card = await fetchWeather(location);
        temporaryWeatherCards.push(card);
      }
      setWeatherCards(temporaryWeatherCards);
    }
    updateWeatherCards();
  }, locations);

  return (
    <div className='App'>
      <Header title='Weather Tracker' />
      <WeatherCards weatherCards={weatherCards} />
      <Footer />
    </div>
  );
}
