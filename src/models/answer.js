const mongoose = require('mongoose');

const Answer = mongoose.model('Answer', {
	answer:{
		type:String,
		default:"",

	},
	author:{
		type: mongoose.Schena.Types.ObjectId,
		ref: "User"
	},
	answer:{
		type:[mongoose.Schema.Types.ObjectId],
		ref:"Answer"
	},
	date:{
		type:Date,
		default:new Date()
	}
});

module.exports =Answer