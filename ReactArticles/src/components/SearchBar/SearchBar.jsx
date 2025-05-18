import { useState } from "react";
import classes from "./SearchBar.module.css";
import EventCard from "../EventCard/EventCard";

export default function EventSearch({ events }) {
  const [searchEvent, setSearchEvent] = useState("");

  const filteredEvents = events.filter((event) =>
    event.event_name.toLowerCase().includes(searchEvent.toLowerCase())
  );

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search events..."
        value={searchEvent}
        onChange={(e) => setSearchEvent(e.target.value)}
        className={classes.input}
      />
      {searchEvent.length > 0 && (
        <div className={classes.results}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event.event_id} event={event} />
            ))
          ) : (
            <p>No events found.</p>
          )}
        </div>
      )}
    </div>
  );
}
