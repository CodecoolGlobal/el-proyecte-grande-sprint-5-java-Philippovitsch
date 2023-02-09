import WeatherCard from "./WeatherCard";

const WeatherCards = ({ weatherCards }) => {
    return (
        <>
            {weatherCards.map((weatherCard) => (
                <WeatherCard key={weatherCard.id} weatherCard={weatherCard}/>
            ))}
        </>
    );
};

export default WeatherCards;