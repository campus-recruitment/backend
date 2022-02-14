const mongoose = require('mongoose');

const User = mongoose.model('User', {
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User