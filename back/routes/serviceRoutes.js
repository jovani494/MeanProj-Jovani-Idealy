const express = require('express')
const ServiceModel = require('../models/service');
const router = new express.Router()
const multer = require("multer");
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/gif": "gif"
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];

        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

router.post("/service",multer({ storage: storage }).single("image"),(req, res, next) => {
        const url = req.protocol + "://" + req.get("host")
        const service = new ServiceModel({
            Nom : req.body.Nom,
            Description: req.body.Description,
            Duree: req.body.Duree ,
            Prix: req.body.Prix,
            Commission: req.body.Commission,
            imagePath: url + "/images/" + req.file.filename,
        })
        service.save().
            then(service => {
                if(service){
                    res.status(201).json({
                        message: "Service added successfully",
                        service: {
                            ...service,
                            id: service._id
                        }
                    })
                }
                else{
                    res.status(500).json({ message: "Error Adding Service" });
                }
                
            })
            .catch(e => {
            })
    })
   
router.put("/service/:id",multer({ storage: storage }).single("image"),(req, res, next) => {
        let imagePath = req.body.imagePath;
        if (req.file) {
            const url = req.protocol + "://" + req.get("host");
            imagePath = url + "/images/" + req.file.filename
        }
        const service = new ServiceModel({
            _id: req.body.id,
            Nom : req.body.Nom,
            Description: req.body.Description,
            Duree: req.body.Duree ,
            Prix: req.body.Prix,
            Commission: req.body.Commission,
            imagePath: imagePath,
        });
        ServiceModel.updateOne(
            { _id: req.params.id },
            service
          ).then(result => {
            if(result){
                res.status(200).json({ message: "Update successful!" });
            }
            
            else {
                res.status(500).json({ message: "Error Upating service" });
            }
        });
    }
);

router.get("/service", (req, res, next) => {
    ServiceModel.find().then(documents => {
        if(documents){
            res.status(200).json({
                message: "Services fetched successfully!",
                services: documents
            });
        }
        else{
            res.status(404).json({ message: "Service not found!" });
        }
       
    });
});

router.get("/service/detail/:id", (req, res, next) => {
    ServiceModel.findById(req.params.id).then(service => {
      if (service) {
        res.status(200).json(service);
      } else {
        res.status(404).json({ message: "service not found!" });
      }
    });
  });
  
router.delete("/service/delete/:id", (req, res, next) => {
    ServiceModel.deleteOne({ _id: req.params.id}).then(
      result => {
        if (result.n > 0) {
          res.status(200).json({ message: "Deletion successful!" });
        } else {
            return res.status(401).json({ message: "Not authorized!!" });
        }
      }
    );
  });

module.exports = router