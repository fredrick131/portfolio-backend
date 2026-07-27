const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    fileUrl: { type: String, default: "" }, // e.g. "/certificates/hackerrank.jpeg"
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certification", certificationSchema);
