const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Engine Diagnostics" },
    { id: 2, name: "Welding & Fabrication" },
    { id: 3, name: "Suspension & Brakes" }
  ]);
});

module.exports = router;
