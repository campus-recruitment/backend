const mongoose = require('mongoose');

const Result = mongoose.model('Result',
  {
    visitors: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Visitors"
    }],
    date: {
      type: Date,
      default: Date.now()
    }
  });

module.exports = Result