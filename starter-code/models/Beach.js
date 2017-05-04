/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const values = ['Red', 'Yellow', 'Green'];

const BeachSchema = new Schema({
  name: String,
  flag: { type: String, enum: values }
});

module.exports = mongoose.model('Beach', BeachSchema);
