const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
  name: String,
  flag: {
    type: String,
    enum: ['Red', 'Yellow', 'Green']
  }
});

module.exports = mongoose.model('Beach', BeachSchema);