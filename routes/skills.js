const express = require("express");
const Skill = require("../models/Skill");

const router = express.Router();

// GET /api/skills
router.get("/", async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ order: 1, createdAt: 1 });
    res.json(skills);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
