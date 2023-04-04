import { Card, CardContent, Typography } from "@mui/material";

export default function EventCard({ card }) {
    return (
        <div className="card">
            <Card sx={{ maxWidth: 345, pt: 3.5, pr: 3.5, pl: 3.5 }} >
                <CardContent>
                    <Typography className="location"
                        variant="body1"
                        sx={{ textAlign: 'center', mb: 2 }}>
                        {card.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
