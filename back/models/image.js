const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  Nom: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model("images", ImageSchema);

module.exports = Image;