import { Card, CardContent, Typography, Box } from "@mui/material";

const BACKEND_URL = process.env.PUBLIC_URL;
const WEATHER_ICONS = {
  "sunny": "/symbols/sunny.jpg",
  "cloudy": "/symbols/cloudy.jpg",
};
const getWeatherIcon = (weatherCode) => {
  switch (true) {
    case (weatherCode === 1):
      return "sunny";
    case (weatherCode > 1 && weatherCode < 10):
      return "cloudy"

    default:
      return "cloudy"
  }
}

export default function WeatherCard({ card }) {
  const imageUrl = BACKEND_URL + WEATHER_ICONS[getWeatherIcon(card.weatherCode)];
  return (
    <div className='card'>
      <Card sx={{ maxWidth: 345, p: 4 }}>
        <CardContent>
          <Typography className="location"
                      variant="h4" color="primary"
                      sx={{ textAlign: 'center', mb: 2 }}>
            {card.location}
          </Typography>
          <Typography className="temperature"
                      variant="body1"
                      sx={{ textAlign: 'center', mb: 2,
                      fontSize: 24 }}>
            {card.temperature}
          </Typography>
          <Typography className="windspeed"
                      variant="body1"
                      sx={{ textAlign: 'center', mb: 2 }}>
            Wind Speed: {card.windSpeed}
          </Typography>
          <Typography className="winddirection"
                      variant="body1"
                      sx={{ textAlign: 'center', mb: 2 }}>
            Wind Direction: {card.windDirection}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
          <img
            className="weather-icon"
            src={imageUrl}
            alt='weather icon'
            width='100'
          ></img>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
