import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../pages/Home/Home";
import classes from "./Page.module.css";
import LoginPage from "../pages/LoginPage/LoginPage";
import NewEvent from "./forms/newEvent/NewEvent";
import EventView from "./EventView/EventView";

export default function MyRoutes() {
  return (
    <>
      <Header />
      <main className={classes.page}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/newEvent" element={<NewEvent />} />
          <Route path="/event/:id" element={<EventView />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
