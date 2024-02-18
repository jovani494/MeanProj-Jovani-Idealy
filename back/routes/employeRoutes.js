const express = require("express");

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const EmployeController = require('../controllers/employes');

// app.get('/employe', EmployeController.findAll);
// app.get('/employe/:id', EmployeController.findOne);
app.post('/employe', EmployeController.create);
// app.patch('/employe/:id', EmployeController.update);
// app.delete('/employe/:id', EmployeController.destroy);

module.exports = app;