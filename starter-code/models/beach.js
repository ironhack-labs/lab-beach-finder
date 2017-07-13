const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const beachSchema = new Schema({
  name: String,
  flag: { type: String , enum: ["red","yellow","green"] }
});

beachSchema.index({ location: '2dsphere' });


const Beach = mongoose.model("Beach", beachSchema);
module.exports = Beach;
