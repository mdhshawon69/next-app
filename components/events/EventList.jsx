import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const items = props.items;
  return (
    <div>
      <ul className={classes.list}>
        {items.map((item) => (
          <EventItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
