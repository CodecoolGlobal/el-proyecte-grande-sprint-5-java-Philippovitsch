import { Card, CardContent, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import React from 'react'

export default function Calendar( {handleCalendarClick} ) {
  const adapter = new AdapterDayjs();
  const twoWeeksInMs = 12096e5
  const maxDate = adapter.date(Date.now() + twoWeeksInMs);

  return (
    <div>
      <Card sx={{ pt: 3.5, pr: 3.5, pl: 3.5 }}>
        <CardContent>
          <Typography className="location"
            variant="body1"
            sx={{ textAlign: 'center', mb: 2 }}>
            Event Calendar
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar disablePast maxDate={maxDate} onChange={handleCalendarClick}/>
          </LocalizationProvider>
        </CardContent>
      </Card>
    </div>
  )
}
