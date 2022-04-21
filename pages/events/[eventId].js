import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import Logistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const SingleEvent = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <Logistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default SingleEvent;
