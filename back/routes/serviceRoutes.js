const express = require("express");
const ServiceController = require('../controllers/services')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/admin/service', ServiceController.findAll);
app.get('/admin/service:id', ServiceController.findOne);
app.post('/admin/service', ServiceController.create);
app.patch('/admin/service:id', ServiceController.update);
app.delete('/admin/service:id', ServiceController.destroy);

module.exports = app;