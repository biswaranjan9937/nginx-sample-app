import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const appName = process.env.APP_NAME || "Cool Stack App";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "backend", timestamp: new Date().toISOString() });
});

app.get("/api/dashboard", (_req, res) => {
  const visitors = Math.floor(Math.random() * 800) + 200;
  const apiLatencyMs = Math.floor(Math.random() * 80) + 20;
  const conversions = (Math.random() * 4 + 1).toFixed(2);

  res.json({
    appName,
    headline: "Realtime vibes from your backend",
    stats: [
      { label: "Visitors", value: visitors.toLocaleString() },
      { label: "API Latency", value: `${apiLatencyMs} ms` },
      { label: "Conversion", value: `${conversions}%` }
    ],
    highlights: [
      "React frontend talking to Express API",
      "Nginx serving optimized static assets",
      "Docker-ready for fast deployment"
    ]
  });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
