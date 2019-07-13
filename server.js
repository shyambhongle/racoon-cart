const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const db = require('./config/keys').mongoDB;

const app = express();


// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


//import routes
const auth=require('./routes/auth');
const addproduct=require('./routes/addproduct');
const fetchproduct=require('./routes/fetchproduct');
const placeorder=require('./routes/placeorder');







//route middleware
app.use('/auth',auth);
app.use('/addproduct',addproduct);
app.use('/fetchproduct',fetchproduct);
app.use('/placeorder',placeorder);






// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
