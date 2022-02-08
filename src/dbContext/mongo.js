const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/campus-recruitment')
    .then(() => console.log('database connection successfull'))
    .catch(err => console.log(err));