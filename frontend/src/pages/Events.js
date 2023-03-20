import Calendar from "../components/Calendar";
import CalendarWeatherDetail from "../components/CalendarWeatherDetail";
import { useState } from "react";
import { fetchDailyData } from "../functions/fetch";

export default function Events() {
  async function handleCalendarClick(value, selectionState) {
    const latitudeVienna = 48.210033;
    const longitudeVienna = 16.363449;
    const day = String(value.$D).length === 1 ? `0${value.$D}` : `${value.$D}`;
    const month = String(value.$M).length === 1 ? `0${value.$M+1}` : `${value.$M+1}`;
    const date = `${value.$y}-${month}-${day}`
    setWeatherData(await fetchDailyData(latitudeVienna, longitudeVienna, date));
  }
  const [weatherData, setWeatherData] = useState();

  return (
    <div className="cardwrapper">
      <Calendar handleCalendarClick={handleCalendarClick}/>
      <CalendarWeatherDetail weatherData={weatherData}/>
    </div>
  )
}
