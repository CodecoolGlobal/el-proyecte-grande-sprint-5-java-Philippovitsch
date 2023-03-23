import Calendar from "../components/Calendar";
import { useState, useEffect } from "react";
import EventCards from "../components/EventCards";
import { saveCalendarEvent, fetchEventData } from "../functions/fetch";

export default function Events() {

  const [eventCards, setEventCards] = useState([]);

  useEffect(() => {
    async function loadEventCards() {
      // if (!userData) {
      //     return;
      // }

      const eventCards = await fetchEventData();
      setEventCards(eventCards);

    };
    loadEventCards();
  }, [eventCards]);


  const addCalendarEvent = (calendarEvent) => {

    const newEvent = {
      name: calendarEvent.name,
    }

    async function handleSaving() {
      const response = await saveCalendarEvent(newEvent);
      if (response === 200) {
        setSuccessMessage("Successfully saved Event!");
        setSucessOpen(true);
      };
    }

    handleSaving();
  }

  const [sucessMessage, setSuccessMessage] = useState("");
  const [sucessOpen, setSucessOpen] = useState(false);

  return (
    <div className="cardwrapper">
      <Calendar displayModal={true} addCalendarEvent={addCalendarEvent} />
      <EventCards eventCards={eventCards} />
    </div>
  )
}
