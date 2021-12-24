import Report from "../models/report";
import express from "express";
const router = express.Router();

router.get("/reports/date/:startDate/:endDate", async (req, res) => {
  try {
    res.send(
      await Report.find({
        lastUpdatedAtApify: {
          $gte: req.params.startDate,
          $lt: req.params.endDate,
        },
      })
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
