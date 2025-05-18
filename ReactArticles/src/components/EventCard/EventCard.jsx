import classes from "./EventCard.module.css";
import { Outlet, Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className={classes.eventCard}>
      <h2>{event.event_name}</h2>
      <p>{event.category}</p>
      <img src={event.src} alt="" />
      <Link to={`/event/${event.event_id}`}>view</Link>
    </div>
  );
}
