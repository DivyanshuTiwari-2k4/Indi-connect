import express, { urlencoded } from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();  // <= LOAD .env file

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(urlencoded({ limit: "40kb", extended: true }));

// routes
app.use("/api/v1/users", userRoutes);

// DB + server start
const start = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to DB`);
    
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log("DB connection error", err);
  }
};

start();
