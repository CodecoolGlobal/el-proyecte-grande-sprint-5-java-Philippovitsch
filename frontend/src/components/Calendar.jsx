import { Card, CardContent, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { useState } from "react";

import EventModal from './EventModal'

export default function Calendar({ displayModal, addCalendarEvent }) {
  const [showModal, setShowModal] = useState(false);

  const adapter = new AdapterDayjs();
  const twoWeeksInMs = 12096e5;
  const maxDate = adapter.date(Date.now() + twoWeeksInMs);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Card sx={{ pt: 3.5, pr: 3.5, pl: 3.5 }}>
        <CardContent>
          <Typography className="location"
            variant="body1"
            sx={{ textAlign: 'center' }}>
            Event Calendar
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar disablePast maxDate={maxDate} onChange={openModal} />
          </LocalizationProvider>
        </CardContent>
      </Card>
      {(showModal && displayModal) && <EventModal closeModal={closeModal} addCalendarEvent={addCalendarEvent} />}
    </div>
  )
}
