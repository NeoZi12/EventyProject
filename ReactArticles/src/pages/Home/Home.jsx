import classes from "./Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import EventCard from "../../components/EventCard/EventCard";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("home")
      .then((res) => {
        setEvents(res.data);
        console.log(res.data); // Data from API
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleCreateEvent() {
    navigate("/newEvent");
  }
  return (
    <main>
      <div className={classes.homeHeader}>
        <h2>Home Page</h2>
      </div>
      <div className={classes.homeSearch}>
        <SearchBar events={events} />
      </div>
      <h2>Featured Events</h2>
      <div className={classes.featuredEvents}>
        {events &&
          events.map((event) => {
            return <EventCard event={event} key={event.event_id} />;
          })}

        {user && (
          <button className={classes.createButton} onClick={handleCreateEvent}>
            Create an event
          </button>
        )}
      </div>
      <div className={classes.mapAndFilter}>
        <div className={classes.filters}>
          <p>Here we will have filters</p>
        </div>
        <div className={classes.map}>
          <p>Here we will have a map</p>
        </div>
      </div>
    </main>
  );
}
