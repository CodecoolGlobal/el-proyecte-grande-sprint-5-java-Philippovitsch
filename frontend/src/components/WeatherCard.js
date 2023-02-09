const WeatherCard = ({ weatherCard }) => {
    const getWeatherIcon = (weatherCode) => {
        switch (weatherCode) {
            case 0:
                return "/symbols/sunny.jpg";
            default:
                return "/symbols/cloudy.jpg"
        }

    };

    return (
        <div className="card" >
            <h2 className="location" >{weatherCard.location}</h2>
            <p className="temperature" >{weatherCard.temperature}</p>
            <p>Wind: {weatherCard.windSpeed}</p>
            <p>Wind direction: {weatherCard.winddirection}</p>
            <img className="weather-icon" src={process.env.PUBLIC_URL+getWeatherIcon(weatherCard.weatherCode)} alt="weather icon" width="100"></img>
        </div>
    );
};

export default WeatherCard;