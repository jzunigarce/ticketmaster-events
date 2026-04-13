import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJson from "../../data/events.json";

const Events = () => {
  const [data] = useState(eventsJson);
  const {
    _embedded: { events },
  } = data;
  return (
    <div>
      Eventos
      {events.map((eventItem) => (
        <EventItem
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images[0].url}
          key={`event-item-${eventItem.id}`}
        />
      ))}
    </div>
  );
};

export default Events;
