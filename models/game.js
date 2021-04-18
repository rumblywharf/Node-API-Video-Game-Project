const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
title: {
  type: String,
  required: true
},
year: {
  type: Number
},
genre: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Genre'
}
},
{
  timestamps: true
});

module.exports = mongoose.model('Game', GameSchema);
