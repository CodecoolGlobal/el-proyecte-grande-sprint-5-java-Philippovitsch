import Calendar from "../components/Calendar";
import CalendarWeatherDetail from "../components/CalendarWeatherDetail";
import { useEffect, useState } from "react";

export default function Events() {
  function handleCalendarClick(value, selectionState) {
    setChosenDate(value);
  }
  const [chosenDate, setChosenDate] = useState();
  return (
    <div className="cardwrapper">
      <Calendar handleCalendarClick={handleCalendarClick}/>
      <CalendarWeatherDetail chosenDate={chosenDate}/>
    </div>
  )
}
