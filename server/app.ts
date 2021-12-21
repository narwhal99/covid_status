import express from "express";
import mongoose from "mongoose";
import report from "./routes/report";

mongoose.connect("mongodb://127.0.0.1:27017/covid", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to the db");
  }
});

const app = express();

//router
app.use(report);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Server running!");
});
