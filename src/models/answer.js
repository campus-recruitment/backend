const mongoose = require('mongoose');

const Answer = mongoose.model('Answer', {
	answer:{
		type:String,
		default:"",

	},
	author:{
		type:[mongoose.Types.ObjectId],
		default:[],
		
	},
	answer:{
		type:[mongoose.Type.ObjectId],
		ref:"Answer"
	},
	date:{
		type:Date,
		default:new Date()
	}
});

module.exports =Answer