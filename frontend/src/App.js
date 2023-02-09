import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";

function App() {
    const [weatherCards, setWeatherCards] = useState([
        {
            id: 1,
            location: "Vienna",
            weatherCode: 0,
            temperature: "10°C",
            windSpeed: "5km/h",
        }
    ])
    return (
    <div className="App">
        <Header title="Weather Tracker"/>
        <WeatherCards weatherCards={weatherCards}/>
        <Footer />
    </div>
    );
}

export default App;
