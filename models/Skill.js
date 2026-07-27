const mongoose = require("mongoose");

const skillGroupSchema = new mongoose.Schema(
  {
    group: { type: String, required: true, trim: true }, // e.g. "Programming Languages"
    icon: { type: String, default: "code" }, // maps to an icon key on the frontend
    items: { type: [String], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillGroupSchema);
