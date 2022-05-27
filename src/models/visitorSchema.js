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
        default: Date.now()
    },
    skillsRequired: {
        type: String
    },
    description: {
        type: String
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
    hiringProcess: {
        type: [String]
    },
    dueDate: {
        type: Date,
        default: Date.now()
    },
    studentsApplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    studentsSaved: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    selectedStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
})

module.exports = mongoose.model('Visitors', Visitors);