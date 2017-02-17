const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const Beach = new Schema({
  name: String,
  location: {
    type: {
      type: String,
    },
    coordinates: [Number, Number]
  },
});

Beach.index({location: '2dsphere'})

module.exports = mongoose.model('Beach', Beach);
