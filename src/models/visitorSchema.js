const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Visitors = new Schema({
    
    companyName: {
        type: String,
        required: true,
    },
    positionName: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: new Date()
    },
    skillsRequired: {
        type: [String]
    },
    description: {
        type: [String]
    },
    location: {
        type: String,
    },
    packages: {
        type: String
    },
    vacancies: {
        type: Number
    },
    criteria: {
        type: [String]
    },
    aboutCompany: {
        type: String
    },
    companyLogo: {
        type: String
    },
    website: {
        type: String
    },
    fullTime: {
        type: Boolean
    },
    studentsApplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    hiringProcess: {
        type: [String]
    },
    dueDate: {
        type : Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Visitors', Visitors);