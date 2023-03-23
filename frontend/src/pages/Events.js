import Calendar from "../components/Calendar";
import CalendarWeatherDetail from "../components/CalendarWeatherDetail";
import { useState } from "react";
import { fetchDailyData } from "../functions/fetch";

export default function Events() {

  return (
    <div className="cardwrapper">
      <Calendar displayModal={true} />
    </div>
  )
}
