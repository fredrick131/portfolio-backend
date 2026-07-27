const express = require("express");
const Certification = require("../models/Certification");

const router = express.Router();

// GET /api/certifications
router.get("/", async (req, res, next) => {
  try {
    const certs = await Certification.find().sort({ order: 1, createdAt: 1 });
    res.json(certs);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
