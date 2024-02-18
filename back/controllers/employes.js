const EmployeModel = require('../models/employe');

exports.create = async (req,res) => {
    if (!req.body.Nom && !req.body.Prenom && !req.body.Specialite ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    const employe = new EmployeModel({
        Nom : req.body.Nom,
        Prenom: req.body.Prenom,
        Specialite: req.body.Specialite ,
    });
    
    await employe.save().then(data => {
        res.send({
            message:"Employe created successfully!!",
            employe:data
        });
    }).catch (err => { 
        res.status(500).send({
            message: err.message || "Some error occurred while creating employe"
        });
    });     
}