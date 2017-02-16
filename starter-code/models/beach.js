const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
  name: {type: String, require: true},
  flag: {type: String, enum: ['green', 'yellow', 'red']},
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }

});

const Beach = mongoose.model('Beaches', BeachSchema);
module.exports = Beach;
