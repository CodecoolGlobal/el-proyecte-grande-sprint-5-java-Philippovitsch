import { Card, CardContent, Typography } from "@mui/material";
import WeatherForecast from "./WeatherForecast";

export default function EventCard({ card }) {
    console.log(card);
    const country =  card.country;
    const location = card.location;

    return (
        <div className="card">
            <Card sx={{ maxWidth: 400, height: 426  , borderRadius: 2 }} >
                <CardContent>
                    <Typography className="location"
                        variant="body1" 
                        sx={{ textAlign: 'center', fontSize: 20, fontWeight: "bold", mt: 1 }}>
                        {card.name}
                    </Typography>
                    <Typography
                        variant="body1" 
                        sx={{ textAlign: 'center', fontSize: 20, mt: 2 }}>
                        <i>{new Date(card.timestamp).toDateString()}</i>
                    </Typography>
                    <WeatherForecast weatherForecast={card} country={country} location={location} />
                </CardContent>
            </Card>
        </div>
    );
}
