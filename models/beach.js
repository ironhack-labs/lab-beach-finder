/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const beachSchema = new Schema({
  name: String,
  flag: {type: String, enum: ['red', 'yellow', 'green']}
});

const User = mongoose.model('Beach', BeachSchema);
module.exports = Beach;
