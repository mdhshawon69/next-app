import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

const Events = () => {
  const events = getAllEvents();
  // const router = useRouter();

  // const findEventsHandler = (year, month) => {
  //   const fullPath = `/events/${year}/${month}`;
  //   router.push(fullPath);
  // };

  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
};

export default Events;
