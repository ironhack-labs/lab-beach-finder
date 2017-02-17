const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let beachSchema = new Schema({

    name : String,
    flag : String,
});

beachSchema.index({ location : '2dsphere' });

let Beach = mongoose.model('Beach', beachSchema);
module.exports = Beach;
