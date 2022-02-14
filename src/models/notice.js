const mongoose = require('mongoose');

const Notice  = mongoose.model('Notice',
 {
    title:{
           type : String,
           defalut : ""
         },  
    date: {
        type: String,
        default : ""
    },
    description:{
        type : String,
        default:""
    },
    authorites:{
        type : String,
        default:""
    }
});

module.exports = Notice 
