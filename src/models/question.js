const mongoose = require('mongoose');

const Question = mongoose.model('Question', {
	question:{
		type: String,
		default: ""
	},
	author:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Student"
	},
	answer:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Answer"
	},
	date:{
		type: Date,
		default: new Date()
	}
});

module.exports = Question