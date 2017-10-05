const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BeachSchema = Schema({
  name: String,
  flag: {
    type: String,
    required: true,
    enum: ["green", "yellow", "red"],
  }
});

const beach = mongoose.model("Beach", BeachSchema);
module.exports = Beach;
