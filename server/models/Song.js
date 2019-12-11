const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  label: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

// eslint-disable-next-line no-undef
module.exports = Song = mongoose.model("song", SongSchema);