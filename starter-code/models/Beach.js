const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TYPES = require('./beach-types');

const beachSchema = new Schema({
  name: { type: String, required: true },
  flag: { type: String, enum: TYPES, required: true },
  location: { lat: Number, lng: Number }
});
const Beach = mongoose.model("Place", beachSchema);
module.exports = Beach;

