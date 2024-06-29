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

connectToMongo(); // Make sure this function is correctly defined and connects to your MongoDB instance

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
