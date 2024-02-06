const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const serviceRouter = require("./routes/serviceRoutes.js");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Connexion à MongoDB Atlas
const mongoURI = 
  'mongodb+srv://ravelonarivojovani:MYmeanproject10@jovani0.bcg1atj.mongodb.net/mean?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/index.html');
 })

app.use(serviceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
