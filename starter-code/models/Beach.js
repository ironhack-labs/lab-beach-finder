const mongoose = require('mongoose');
const flagColor = require('./Flagcolor');
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
  name: { type: String, required: true },
  flag: { type: String, enum: flagColor, required: true }

})

module.exports = mongoose.model('Beach', BeachSchema);
