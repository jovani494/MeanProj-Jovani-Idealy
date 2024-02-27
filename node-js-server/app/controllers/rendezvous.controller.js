const db = require('../models');
const rendezvous = db.rendezvous;

exports.findAll = async (req, res) => {
    try {
        const rdv = await rendezvous.find();
        res.status(200).json(rdv);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.create = async (req,res) = {
    const rdv = new rendezvous({
        DateRdv : req.body.DateRdv
    });
    
    await rdv.save().then(data => {
        res.send({
            message:"Service created successfully!!",
            rdv : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating service"
        });
    });
}