import React from "react";
import classes from "./participants.module.css";

export default function Participant({ user }) {

  console.log(user);
  return (
    <div className={classes.participant}>
      <img src={user.src} alt={user.user_name} className={classes.avatar} />
      <p className={classes.name}>{user.user_name}</p>
    </div>
  );
}
