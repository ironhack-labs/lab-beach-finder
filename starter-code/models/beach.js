const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const BeachSchema = new Schema({
  beachName: String,
  flag: String,
});

module.exports = mongoose.model('BeachSchema', BeachSchema);
