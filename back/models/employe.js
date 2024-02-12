const mongoose = require("mongoose");

const EmployeSchema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    Prenom : {
        type : String
    },
    Specialite : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'services'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Employe = mongoose.model("employes", EmployeSchema);

module.exports = Employe;