const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Prenom: String,
  Mail: String,
  Phone: Number,
  Password : String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Client = mongoose.model("cleints", ClientSchema);

module.exports = Client;