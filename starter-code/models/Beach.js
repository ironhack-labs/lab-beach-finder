const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
name: String,
flag: String
})

module.exports = mongoose.model('BeachSchema', BeachSchema)
