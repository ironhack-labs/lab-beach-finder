const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beachSchema = new Schema({
  name: String,
  flag: {
    type: String,
    enum: ["red", "yellow", "green"]
  },
  position: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

beachSchema.index({position: "2dsphere"});
const Beach = mongoose.model('beach', beachSchema);


module.exports = Beach;