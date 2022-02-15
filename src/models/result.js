const mongoose = require('mongoose');
const Student = require('./student');
 
const Result = mongoose.model('Result',
 {
   visitors :{
       type: [mongoose.Types.ObjectId],
       ref: "Visitors"
  },
  students :{
       type: [mongoose.Types.ObjectId],
       ref: "Student"
  },
   date :{
       type: Date,
       default: new Date()
   }
 });
 
module.exports = Result

