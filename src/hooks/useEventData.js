import { useState } from "react";
import eventsJson from "../data/events.json";

const useEventData = () => {
  const [data] = useState(eventsJson);
  const {
    _embedded: { events },
  } = data;
  return { events };
};

export default useEventData;
