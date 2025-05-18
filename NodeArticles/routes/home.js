const express = require("express");
const dbSingleton = require("../dbSingleton");
const router = express.Router();
const db = dbSingleton.getConnection();

router.get("/", (req, res) => {
  const query = `SELECT * FROM 
default_images
natural join events
WHERE events.category = default_images.category`;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});




module.exports = router;
