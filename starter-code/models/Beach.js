const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
  name: String,
  flag: {
    type: String,
    enum: ["red", "yellow", "green"]
  },
  location: {type: {type: String  },
    coordinates: [Number]
  }
});

BeachSchema.index({location: '2dsphere'});

module.exports = mongoose.model('Beach', BeachSchema);
