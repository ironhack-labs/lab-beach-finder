const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BeachSchema = new Schema({
    name: String,
    flag: String
    
  }
);

const Post = mongoose.model('Beach', BeachSchema);
module.exports = Post;