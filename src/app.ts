import express from "express";
import mongoose from "mongoose";
import routes from "./adapters/api/routes";

const app = express();
app.use(express.json());

app.use("/api", routes);

const start = async () => {
  await mongoose.connect("mongodb://localhost:27017/library");
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
};

start();
