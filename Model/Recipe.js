const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: false,
      },
      ingredient: {
        type: String,
        required: true,
        unique: false,
      },
      howToMake: {
        type: String,
        required: true,
        unique: false,
      },
      rating: {
        type: Number,
        required : true,
        unique : false,
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Recipes", userSchema);