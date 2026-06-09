import { useState, useEffect } from "react";
import eventsJson from "../data/events.json";

const useEventData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(eventsJson);
    }, 4000);
  }, []);
  return { events: data?._embedded?.events || [] };
};

export default useEventData;
