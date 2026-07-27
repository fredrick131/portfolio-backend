// Run with: npm run seed  (from the backend/ folder, after setting up .env)
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Certification = require("../models/Certification");
const Skill = require("../models/Skill");

const certifications = [
  {
    title: "Problem Solving (Basic) Skill Certification",
    issuer: "HackerRank",
    fileUrl: "/certificates/hackerrank.jpeg",
    order: 1,
  },
  {
    title: "Career Edge – Young Professional Certification",
    issuer: "TCS iON",
    fileUrl: "/certificates/tcsion.jpeg",
    order: 2,
  },
  {
    title: "Java Programming Certification",
    issuer: "Infosys Springboard",
    fileUrl: "/certificates/infosys.jpeg",
    order: 3,
  },
  {
    title: "Getting Started with Front-End and Web Development",
    issuer: "IBM",
    fileUrl: "/certificates/ibm.jpeg",
    order: 4,
  },
];

const skills = [
  {
    group: "Programming Languages",
    icon: "code",
    items: ["C", "Python", "Java", "JavaScript"],
    order: 1,
  },
  {
    group: "Web Technologies",
    icon: "globe",
    items: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
    order: 2,
  },
  {
    group: "Tools & Platforms",
    icon: "tool",
    items: ["Git", "GitHub", "VS Code"],
    order: 3,
  },
  {
    group: "Core Concepts",
    icon: "layers",
    items: ["OOP", "Data Science Fundamentals", "Data Structures & Algorithms"],
    order: 4,
  },
];

async function run() {
  await connectDB();

  await Certification.deleteMany({});
  await Skill.deleteMany({});

  await Certification.insertMany(certifications);
  await Skill.insertMany(skills);

  console.log(`[seed] Inserted ${certifications.length} certifications and ${skills.length} skill groups.`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("[seed] Failed:", err);
  process.exit(1);
});
