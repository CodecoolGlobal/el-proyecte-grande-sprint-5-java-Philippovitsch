import WeatherCard from "./WeatherCard";

export default function WeatherCards({ weatherCards }) {
  return (
    <div className="cardwrapper">
      {weatherCards.map((card) => (
        <WeatherCard key={card.id} card={card} />
      ))}
    </div>
  );
}