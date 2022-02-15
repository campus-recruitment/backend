const mongoose = require('mongoose');

const Notice = mongoose.model('Notice',
    {
        title: {
            type: String,
            defalut: ""
        },
        date: {
            type: Date,
            default: new Date()
        },
        description: {
            type: String,
            default: ""
        },
        authorites: {
            type: String,
            default: ""
        }
    });

module.exports = Notice 
