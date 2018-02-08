const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beachSchema = new Schema({
    name: String,
    flag: String,
    localType:{
        type:String,
        enum:['red','yellow','green']
    }
});

module.export = mongoose.model('Beach',beachSchema);

