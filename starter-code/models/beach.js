const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Beach = new Schema({
  name: String,
  flag: {
    type: String,
    enum: ["GREEN", "YELLOW", "RED"],
    default: "GREEN"
  },
  location: { type:{ type: String}, coordinates: [Number] }
});

// Beach.index({ location: '2dsphere' });

module.exports = mongoose.model("Beach", Beach);
