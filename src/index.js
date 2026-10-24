// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
dotenv.config({
  path: "./env",
});
connectDB();

/*
import mongoose from "mongoose";
import { DB_NAME } from "./tants";

import express from "express";
const app = express();

(async () => {
  try {
     const connectionInstance=await mongoose.connect(`${process.env.MONOGDB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("App is listening on port", process.env.PORT);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();
*/
