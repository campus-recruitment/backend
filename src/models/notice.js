const mongoose = require('mongoose');

const Notice = mongoose.model('Notice',
    {
        title: {
            type: String,
            defalut: ""
        },
        date: {
            type: Date,
            default: Date.now()
        },
        description: {
            type: String,
            default: ""
        },
        authorityName: {
            type: String,
            default: ""
        },
        authorityPosition: {
            type: String,
            defalut: ""
        }
    });

module.exports = Notice 
