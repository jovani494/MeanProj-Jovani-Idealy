const mongoose = require('mongoose');

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