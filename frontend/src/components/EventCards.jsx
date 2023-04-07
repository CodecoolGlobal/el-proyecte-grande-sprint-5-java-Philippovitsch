import Box from "@mui/system/Box";
import LinearProgress from '@mui/material/LinearProgress';

import EventCard from "./EventCard";

export default function EventCards({ eventCards }) {
  return (
    <div className="event-cards">
      {eventCards.length === 0 &&
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}
      {eventCards.map((card) => (
        <EventCard key={card.id} card={card} />
      ))}
    </div>
  );
}
