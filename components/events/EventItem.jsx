/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props.item;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");
  const explorerLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="" />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedLocation}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={explorerLink}>
          <span>Explore Events</span>{" "}
          <span className={classes.icon}>
            <ArrowIcon />
          </span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
