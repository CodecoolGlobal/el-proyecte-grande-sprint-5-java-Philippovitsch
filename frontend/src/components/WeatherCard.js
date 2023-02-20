const BACKEND_URL = process.env.PUBLIC_URL;
const WEATHER_ICONS = ["/symbols/sunny.jpg", "/symbols/cloudy.jpg"];

export default function WeatherCard({ card }) {
  const imageUrl = BACKEND_URL + WEATHER_ICONS(card.weatherCode);

  return (
    <div className='card'>
      <h2 className='location'>{card.location}</h2>
      <p className='temperature'>{card.temperature}</p>
      <p>Wind: {card.windSpeed}</p>
      <p>Wind direction: {card.windDirection}</p>
      <img
        className='weather-icon'
        src={imageUrl}
        alt='weather icon'
        width='100'
      ></img>
    </div>
  );
}
