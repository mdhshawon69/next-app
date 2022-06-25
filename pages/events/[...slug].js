import React from "react";
import Head from "next/head";
import { getFilteredEvents } from "../../helper/api-util";
import EventList from "../../components/events/EventList";

const FilteredEvents = (props) => {
  // const [events, setEvents] = useState();
  // const router = useRouter();
  // const filterData = router.query.slug;

  // const { data, error } = useSWR(
  //   "https://nextjs-project-3433a-default-rtdb.firebaseio.com/events.json"
  // );

  // useEffect(() => {
  //   const events = [];

  //   for (const key in data) {
  //     events.push({
  //       id: key,
  //       ...data[key],
  //     });
  //   }

  //   setEvents(events);
  // }, [data]);

  if (!props.events) {
    return <p className="center">Loading...</p>;
  }

  // const filteredYear = +filterData[0];
  // const filteredMonth = +filterData[1];

  // const filterEvents = events.filter((event) => {
  //   const eventDate = new Date(event.date);
  //   return (
  //     eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  //   );
  // });

  if (props.hasError) {
    return <p className="center">Invalid filter</p>;
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }

  return (
    <div>
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${props.date.month}/${props.date.year}`}
        />
      </Head>
      <EventList items={filteredEvents} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}

export default FilteredEvents;
