import Report from "../models/report";
import express from "express";
const router = express.Router();

router.get("/reports", async (req, res) => {
  res.send(await Report.find());
});

export default router;
