/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Beach = new Schema({
  name: String,
  flag: {type: String, enum:[Red, Yellow, Green] } 
});

module.exports = mongoose.model('Beach', Beach);
