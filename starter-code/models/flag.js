const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flagSchema = new Schema({
  name: String,
  flag: {
    type: String,
    enum: ["red", "yellow", "green"]
  }
});
// to do nearest queries
flagSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Flag", flagSchema);
