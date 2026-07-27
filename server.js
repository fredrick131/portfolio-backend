require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();


// ----- Middleware -----

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fredrick-portfolio1.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());


// ----- Routes -----

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running Successfully 🚀");
});


app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});


// Test API

app.get("/api/test", (req, res) => {
  res.json({
    message: "Frontend connected with backend successfully"
  });
});


// ----- 404 -----

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});


// ----- Server Start -----

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[server] Listening on port ${PORT}`);
});