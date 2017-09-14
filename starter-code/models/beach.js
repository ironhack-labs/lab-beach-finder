const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const BeachSchema = new Schema({
  name: String,
  flag: String,
});

BeachSchema.index({ location: '2dsphere' });

const Beach = mongoose.model("Place", BeachSchema);
module.exports = Beach;