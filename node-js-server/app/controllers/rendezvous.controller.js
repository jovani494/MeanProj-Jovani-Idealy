
const rendezvous = require('../models/rendezvous.model');
const employe = require('../models/employe.model');

exports.findAll = async (req, res) => {
    try {
        const rdv = await rendezvous.find().populate('Client')
        .populate('Service')
        .populate('Employe')
        .populate('Etat');;
        res.status(200).json(rdv);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.getEmployes = async (req, res) => {
    try {
        const id = req.params.id;
        const employes = await employe.find({Services : id})
        res.status(200).json(employes);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findClient = async (req, res) => {
    try {
        const id = req.params.id;
        const rdv = await rendezvous.find({Client : id}).populate('Client')
        .populate('Service')
        .populate('Employe')
        .populate('Etat');;
        res.status(200).json(rdv);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const rdv = await rendezvous.find({Employe : id}).populate('Client').populate('Etat')
        res.status(200).json(rdv);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.updateState = async(req,res) => {
    try { const test2 = req.body.Etat;
        const updatedRdv = await rendezvous.findByIdAndUpdate(req.params.id,{ Etat: req.body.Etat });
        const test1 = req.params.id;
        
        if (!updatedRdv) {
          return res.status(404).json({ message: 'Rdv non trouvé.' });
        }
    
          res.status(200).json({ message: 'mise à jour avec succès.', test1, test2, updatedRdv });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour ' });
        }
}

exports.create = async(req,res) => {
    const rdv = new rendezvous({
        DateRdv : req.body.DateRdv,
        Heure : req.body.Heure,
        Client : req.body.Client,
        Service : req.body.Service,
        Employe : req.body.Employe,
        Etat : req.body.Etat,
    });
    
    await rdv.save().then(data => {
        res.send({
            message:"Rendez-vous created successfully!!",
            rdv : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating service"
        });
    });
}