const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const flagSchema = new Schema({
  name: String,
  flag: String
  location: {
    type : { type : String}, location : [Number]
  }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Beach = mongoose.model("Beach", flagSchema);
module.exports = Beach;
