const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beachSchema = new Schema ({
  name: {type: String},
  flag: {type: String, value: ['red', 'yellow', 'green']}
});

const Beach = mongoose.model('Beach', beachSchema);

module.exports = Beach;
