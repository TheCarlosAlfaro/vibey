const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const musicSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    favoriteSong: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('Favorite Song', musicSchema);

module.exports = User;
