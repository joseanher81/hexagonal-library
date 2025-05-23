import express from "express";
import mongoose from "mongoose";
import routes from "./adapters/api/routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routes);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}

const start = async () => {
  await mongoose.connect(MONGO_URI);
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
};

start();
