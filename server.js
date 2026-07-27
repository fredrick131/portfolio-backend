require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const certificationsRouter = require("./routes/certifications");
const skillsRouter = require("./routes/skills");
const contactRouter = require("./routes/contact");

const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fredrick-portfolio1.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "50kb" }));

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Routes
app.use("/api/certifications", certificationsRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/contact", contactRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[server] Listening on port ${PORT}`);
});