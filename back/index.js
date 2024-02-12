const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const data = require('./database/database.js');

const serviceRouter = require("./routes/serviceRoutes.js");
const employeRouter = require("./routes/employeRoutes.js");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/index.html');
 })

app.use('/',employeRouter);
app.use('/',serviceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
