const WeatherCard = ({ weatherCard }) => {
    return (
        <div>
            <p>{weatherCard.location}</p>
            <p>{weatherCard.temperature}</p>
            <p>Wind: {weatherCard.windSpeed}</p>
        </div>
    );
};

export default WeatherCard;