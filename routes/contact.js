const express = require("express");
const rateLimit = require("express-rate-limit");

const router = express.Router();


// Simple abuse protection
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many messages sent. Please try again later."
  },
});


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// POST /api/contact
router.post("/", contactLimiter, async (req, res) => {

  try {

    const { name, email, message } = req.body || {};


    if (!name || !email || !message) {
      return res.status(400).json({
        error: "name, email, and message are all required."
      });
    }


    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({
        error: "Please provide a valid email address."
      });
    }


    if (message.length < 10) {
      return res.status(400).json({
        error: "Message is too short."
      });
    }


    // MongoDB இல்லாமல் console save
    console.log("New Contact Message:");
    console.log({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });


    res.status(201).json({
      success: true,
      message: "Message received successfully"
    });


  } catch (err) {

    res.status(500).json({
      error: "Server error"
    });

  }

});


module.exports = router;