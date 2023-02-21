import WeatherCard from "./WeatherCard";

export default function WeatherCards({ weatherCards }) {
  return (
    <>
      {weatherCards.map((card) => (
        <WeatherCard key={card.id} card={card} />
      ))}
    </>
  );
}