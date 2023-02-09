import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCards from "./components/WeatherCards";
import WeatcherFetcher from "./components/WeatherFetcher";

function App() {

    const location = 'Vienna'

    let [weatherCards, setWeatherCards] = useState([
        {
            id: 1,
            location: location,
            weatherCode: 0,
            temperature: "",
            windSpeed: "",
        }
    ])

    WeatcherFetcher(location, setWeatherCards)

    return (
    <div className="App">
        <Header title="Weather Tracker"/>
        <WeatherCards weatherCards={weatherCards}/>
        <Footer />
    </div>
    );
}

export default App;
