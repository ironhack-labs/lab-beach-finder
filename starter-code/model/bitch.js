const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const BitchesSchema = new Schema({
 name: String,
 flagColor: {
   type: String,
   enum: ["Red", "Yellow", "Green"]
 }
}, {
 timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


module.exports = mongoose.model('Bitches', BitchesSchema);
