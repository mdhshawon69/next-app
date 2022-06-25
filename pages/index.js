import React from "react";
import Head from "next/head";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getFeaturedEvents } from "../helper/api-util";

const Homepage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="You can find here the best events for you..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default Homepage;
