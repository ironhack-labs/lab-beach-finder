/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const BiatchSchema = new Schema ({
  name: String,
  flag: String
});

const Biatch = mongoose.model('Biatch', BiatchSchema);
module.exports = Biatch;
