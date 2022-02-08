const mongoose = require('mongoose');

const Example = mongoose.model('Example', {
    name: String,
    rollno: String,
    subject: String
});

module.exports = Example