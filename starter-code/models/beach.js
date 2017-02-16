const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
  name : String,
  type : String,
  // location : {type : { String }, coordinates: [Number]}
});

module.exports = mongoose.model('Beach', PlaceSchema);
