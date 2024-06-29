import express from "express";
import connectToMongo from "./config/db.js";
import cors from "cors";
import galleryRoutes from "./routes/gallery.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1", galleryRoutes);
app.use(express.static("public/upload"));

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToMongo().then(() => {
  // Listen on all network interfaces
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`API is running on http://localhost:${PORT}`);
  });
});

