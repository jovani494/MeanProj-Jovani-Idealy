const express = require("express");
const ServiceController = require('../controllers/services')
const bodyParser = require('body-parser');
const app = express();

const multer = require('multer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/service', ServiceController.findAll);
app.get('/service/detail/:id', ServiceController.findOne);
app.post('/service/create/', ServiceController.create);
app.put('/service/update/:id', ServiceController.update);
app.delete('/service/delete/:id', ServiceController.destroy);

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

app.put("/service/createimg/:id", upload.single("avatar"), async (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  avatar= url + "/public/" + req.file.filename;

  await ServiceModel.findByIdAndUpdate(id, req.body, {new:true}).then(data => {
    if (!data) {
        res.status(404).send({
            message: `service not found.`
        });
    }else{
        res.send({ message: "service updated successfully." })
      }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
  });

module.exports = app;