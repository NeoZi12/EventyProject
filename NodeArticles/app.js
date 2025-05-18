const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const homeRoute = require("./routes/home");
const newEventRoute = require("./routes/newEvent");
const eventRoute = require("./routes/event");
const loginRoute = require("./routes/login");
const port = 8801;

app.use(express.json());

app.use("/home", homeRoute);
app.use("/newEvent", newEventRoute);
app.use("/event", eventRoute);
app.use("/login", loginRoute);

app.use((err, req, res, next) => {
  console.error(err); // Log error
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
