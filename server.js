const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const servicesRoute = require("./routes/services");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/api/services", servicesRoute);

// Contact endpoint (demo)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact received:", name, email, message);
  // TODO: integrate email or DB later
  return res.status(200).json({ ok: true, message: "Received" });
});

// Fallback for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/index.html"));
});

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
