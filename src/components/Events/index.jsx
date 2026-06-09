import useEventData from "../../hooks/useEventData";
import EventItem from "./components/EventItem";

const Events = ({ searchTerm }) => {
  const { events } = useEventData();
  console.log("test", events);
  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm),
      );
    }
    return eventsFiltered.map((eventItem) => (
      <EventItem
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        key={`event-item-${eventItem.id}`}
      />
    ));
  };
  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
