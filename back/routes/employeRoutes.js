const express = require('express')
const Employe = require('../models/employe')
const router = new express.Router()
const multer = require("multer");

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/gif": "gif"
};

const storage = multer.diskStorage({destination: (req, file, cb) => {
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

router.post("/employe",multer({ storage: storage }).single("image"),(req, res, next) => {
        const url = req.protocol + "://" + req.get("host")
        const employe = new Employe({
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            imagePath: url + "/images/" + req.file.filename,
            Specialite: req.body.serviceId,
        })
        employe.save().then(employe => {
                if(employe){
                    res.status(201).json({
                        message: "employe added successfully",
                        employe: {
                            ...employe,
                            id: employe._id
                        }
                    })
                }
                else{
                    res.status(500).json({ message: "Error Adding Employe" });
                }
                
            })
            .catch(e => {
            })
    })
   
router.put("/employe/:id",multer({ storage: storage }).single("image"),
    (req, res, next) => {
        let imagePath = req.body.imagePath;
        if (req.file) {
            const url = req.protocol + "://" + req.get("host");
            imagePath = url + "/images/" + req.file.filename
        }

        const employe = new Employe({
            _id: req.body.id,
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            imagePath: imagePath,
            Specialite: req.body.serviceId
        });
        Employe.updateOne(
            { _id: req.params.id },
            employe
          ).then(result => {
            if(result){
                res.status(200).json({ message: "Update successful!" });
            }           
            else {
                res.status(500).json({ message: "Error Upating employe" });
            }
        });
    }
);

router.get("/employe", (req, res, next) => {
    Employe.find().then(documents => {
        if(documents){
            res.status(200).json({
                message: "Employes fetched successfully!",
                employes: documents
            });
        }
        else{
            res.status(404).json({ message: "Employe not found!" });
        }
       
    });
});

router.get("/employe/detail/:id", (req, res, next) => {
    Employe.findById(req.params.id).then(employe => {
      if (employe) {
        res.status(200).json(employe);
      } else {
        res.status(404).json({ message: "employe not found!" });
      }
    });
  });
  
router.delete("/employe/delete/:id", (req, res, next) => {
    Employe.deleteOne({ _id: req.params.id }).then(
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