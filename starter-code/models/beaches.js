const mongoose = require('mongoose')
const Schema = mongoose.Schema

const beachSchema = new Schema({
  name: String,
  flag: {
    type: String,
    enum: ['yellow', 'red', 'green']
  }
})

const Beach = mongoose.model('Beach', beachSchema)
module.exports = Beach
