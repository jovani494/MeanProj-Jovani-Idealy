const express = require("express");

const bodyParser = require('body-parser');

const multer = require('multer');

filename = '';
const myStorage = multer.diskStorage({
    destination : './uploads',
    filename : (req, file, redirect) => {
        let date = Date.now();
        let fl = date +'.' + file.mimetype.split('/')[1];
        redirect(null,fl);
        filename = fl;
    }
})

const upload = multer({storage:myStorage});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const ServiceController = require('../controllers/services');

app.get('/service', ServiceController.findAll);
app.get('/service/:id', ServiceController.findOne);
app.post('/service', upload.any('image'),ServiceController.create);
app.patch('/service/update/:id', ServiceController.update);
app.delete('/service/delete/:id', ServiceController.destroy);

module.exports = app;