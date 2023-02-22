import WeatherCard from "./WeatherCard";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function WeatherCards({ weatherCards }) {
  return (
    <div className="cardwrapper">
      {weatherCards.length === 0 && 
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>}
      {weatherCards.map((card) => (
        <WeatherCard key={card.id} card={card} />
      ))}
    </div>
  );
}