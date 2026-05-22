const mongoose = require("mongoose");
require("dotenv").config();

async function dbconnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅ - db.js:7");
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = dbconnect;