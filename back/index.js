const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const data = require('./database/database.js');

const serviceRouter = require("./routes/serviceRoutes.js");
const etatRouter = require("./routes/etatRoutes.js");


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.use(cors())
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/index.html');
 })
 const directory = path.join(__dirname, './images');
app.use("/images", express.static(directory));
app.use('/',etatRouter);
app.use('/',serviceRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});