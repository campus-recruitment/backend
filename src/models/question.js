const mongoose = require('mongoose');

const Question = mongoose.model('Question', {
	question:{
		type:String,
		default:""

	},
	author:{
		type:[mongoose.Types.ObjectId],
		default:[],
		ref:"Student"
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

module.exports = Question