import React from "react";
import classes from "./participantsList.module.css";
import Participant from "../participants/participant";

export default function ParticipantsList({ participants }) {
  return (
    <div className={classes.gridContainer}>
      {participants.map((el) => (
        <Participant user={el} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
