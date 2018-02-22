const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BeachSchema = new Schema({
    name: String,
    flag: String
    
  }
);

const Beach = mongoose.model('Beach', BeachSchema);
module.exports = Beach;