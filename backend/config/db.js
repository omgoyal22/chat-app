const mongoose = require("mongoose");
//const colors = require("colors");
const dotenv=require("dotenv");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://goyalom936:omggg123@cluster0.tr8ah6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;