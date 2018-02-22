const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const beachSchema = new Schema({
  name: String,
  flag: String,
  location: { type: { type: String }, coordinates: [Number] }
    },
  {
      timestamps:{
          createdAt: "created_at",
          updatedAt: "updated_at"
      }
  }
);

beachSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Beach', beachSchema);
