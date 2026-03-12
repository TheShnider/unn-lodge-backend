import express from "express";
import Lodge from "../models/Lodge.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { location, budget } = req.query;

    let filter = {};

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (budget) {
      filter.price = { $lte: Number(budget) };
    }

    const lodges = await Lodge.find(filter);
    res.json(lodges);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
