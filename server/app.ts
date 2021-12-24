import express from "express";
import mongoose from "mongoose";
import report from "./routes/report";

//test
import axios from "axios";
import Report from "./models/report";

let fetchData = async () => {
  try {
    const data = await axios.get(
      "https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items"
    );

    if (data.data.length > (await Report.count())) {
      await Report.remove();
      Report.insertMany(data.data, {}, function (err, result) {
        if (err) {
          console.log(err);
        }
        // console.log(result);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();

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

app.listen(5000, () => {
  console.log("Server running!");
});
