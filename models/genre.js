const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

GenreSchema.methods.getGames = async function(){
  return await mongoose.model('Game').find({genre: this._id});
}

module.exports = mongoose.model('Genre', GenreSchema);
