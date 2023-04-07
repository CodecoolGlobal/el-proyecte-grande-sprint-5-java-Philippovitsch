import { useState } from "react";

import { Card, CardContent, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import EventModal from './EventModal'

export default function Calendar({ displayModal, addCalendarEvent }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const adapter = new AdapterDayjs();
  const twoWeeksInMs = 12096e5;
  const maxDate = adapter.date(Date.now() + twoWeeksInMs);

  const openModal = (event) => {
    setSelectedDate(new Date(event));
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Card sx={{ pt: 3.5, pr: 3.5, pl: 3.5 }}>
        <CardContent>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center' }}>
            Event Calendar
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              disablePast
              maxDate={maxDate}
              onChange={openModal} />
          </LocalizationProvider>
        </CardContent>
      </Card>
      {(showModal && displayModal) && <EventModal closeModal={closeModal} addCalendarEvent={addCalendarEvent} date={selectedDate} />}
    </div>
  )
}
