const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const beachSchema = new Schema ( {
  name : String,
  flag: String, value: ["red","yellow", "green"]
})


const Beach = mongoose.model('beach', beachSchema);


module.export = Beach;
