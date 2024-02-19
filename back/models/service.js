const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Description: String,
  Duree: Number,
  Prix: Number,
  Commission: Number,
  CommissionEmploye: Number,
  imagePath: {
    type: String,
  },
  Employes : [
    {
      type : mongoose.Schema.Types.ObjectId, ref: 'employes'
    }
  ],
  created_at: {
    type: Date,
    default: Date.now
  }
});

ServiceSchema.pre('save', function (next) {
  // Vérifier si les champs nécessaires pour calculer la commission sont définis
  if (this.Prix !== undefined && this.Commission !== undefined) {
    // Calculer la commission de l'employé
    this.CommissionEmploye = (this.Commission * this.Prix) / 100;
  }
  next();
});

const Service = mongoose.model("services", ServiceSchema);

module.exports = Service;