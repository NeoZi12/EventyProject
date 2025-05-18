import { useState } from "react";
import classes from "./LoginPage.module.css";
import Register from "../../components/forms/Register/Register";
import Login from "../../components/forms/login/Login";

export default function LoginPage({ user, setUser }) {
  return (
    <div className={classes.container}>
      <div className={`${classes.half} ${classes.leftPane}`}>
        <Login />
      </div>
      <div className={`${classes.half} ${classes.rightPane}`}>
        <Register />
      </div>
    </div>
  );
}
