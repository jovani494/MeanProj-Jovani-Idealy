const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Description: String,
  Duree: String,
  Prix: Number,
  Commission: Number
});

const Service = mongoose.model("services", ServiceSchema);

module.exports = Service;