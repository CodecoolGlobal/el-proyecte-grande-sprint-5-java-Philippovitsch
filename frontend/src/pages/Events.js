import Calendar from "../components/Calendar";
import { useState, useEffect } from "react";
import EventCards from "../components/EventCards";
import { saveCalendarEvent, fetchEventData } from "../functions/fetch";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Events() {
  const [eventCards, setEventCards] = useState([]);

  const user = localStorage.getItem("user");

  const fetchData = async () => {
    const eventCards = await fetchEventData();
    setEventCards(eventCards);
  }

  useEffect(() => {
    async function loadEventCards() {
      if (user !== null) {
        fetchData();
      }
    };
    loadEventCards();
  }, []);


  const addCalendarEvent = async (calendarEvent) => {
    const newEvent = {
      name: calendarEvent.name,
    }
    async function handleSaving() {
      const response = await saveCalendarEvent(newEvent);
      if (response === 200) {
        setSuccessMessage("Successfully saved Event!");
        setSuccessOpen(true);
      };
    }

    await handleSaving();
    fetchData();
  }

  const [successMessage, setSuccessMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <div className="event-wrapper">
      {user &&
        <>
          <Calendar displayModal={true} addCalendarEvent={addCalendarEvent} />
          <EventCards eventCards={eventCards} />
        </>
      }
      {!user &&
        <Typography
          variant="h4"
          sx={{ color: "white" }}
        >
          Please <NavLink style={{ color: "white" }} to="/LogIn">log in</NavLink> to see events!
        </Typography>}
    </div>
  )
}
