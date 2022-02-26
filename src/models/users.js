const mongoose = require('mongoose');

const User = mongoose.model('User', {
    userId: {
        type: String,
        index: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
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
    },
    resetToken: String,
    expireToken: Date
})

module.exports = User