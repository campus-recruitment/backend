const mongoose = require('mongoose');
 
const Result = mongoose.model('Result',
 {
   visitors :{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Visitors"
  },
  students :{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Student"
  },
   date :{
       type: Date,
       default: new Date()
   }
 });
 
module.exports = Result

