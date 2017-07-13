const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BeachSchema = Schema({
  name: String,
  flag: {
    type: String,
    enum : ['red', 'yellow', 'green']
}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Beach = mongoose.model('Beach', BeachSchema);

module.exports = Beach;
