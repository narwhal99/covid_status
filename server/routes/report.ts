import Report from "../models/report";
import express from "express";
const router = express.Router();

router.get("/reports/:date", async (req, res) => {
  res.send(
    await Report.find({
      lastUpdatedAtApify: req.params.date,
    })
  );
});

export default router;
