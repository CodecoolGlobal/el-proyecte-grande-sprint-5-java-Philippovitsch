import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Typography } from "@mui/material";

import Calendar from "../components/Calendar";
import EventCards from "../components/EventCards";
import { getAllEvents, saveEvent } from "../fetch/eventEndpoint";

export default function Events() {
  const [eventCards, setEventCards] = useState([]);

  const user = localStorage.getItem("user");

  const fetchData = async () => {
    const eventCards = await getAllEvents();
    setEventCards(eventCards);
  }

  useEffect(() => {
    async function loadEventCards() {
      if (user !== null) {
        fetchData();
      }
    };
    loadEventCards();
  }, [user]);


  const addCalendarEvent = async (calendarEvent) => {
    async function handleSaving() {
      const response = await saveEvent(calendarEvent);
      if (response === 200) {
        console.log("Successfully saved Event!");
      };
    }

    await handleSaving();
    fetchData();
  }

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
