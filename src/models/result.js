const mongoose = require('mongoose');
 
const Result = mongoose.model('Result',
 {
   visitors :{
       type: [mongoose.Types.ObjectId],
       ref: "Visitors"
  },
  students :{
       type: [mongoose.Types.ObjectId],
       ref: "studnets"
  },
   date :{
       type: Date
   }
 });
 
module.exports = Result

