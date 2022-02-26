const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    userId: {
        type: String,
        index: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    gender: {
        type: String
    }, 
    rollno: {
        type: String
    },
    department: {
        type: String
    },
    departmentCode: {
        type: String
    },
    semester: {
        type: Number
    },
    degree: {
        type: String
    },
    graduationYear: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: Number
    },
    picture: {
        type: String
    },
    address: {
        type: String
    },
    github: {
        type: String
    },
    linkedIn: {
        type: String
    },
    otherLinks: {
        type: String
    },
    skills: {
        type: [String]
    },
    goals: {
        type: [String]
    },
    education: [
        {
            institue: String,
            degree: String,
            startYear: Number,
            endYear: Number
        }
    ],
    projects: [
        {
            title: String,
            description: String,
            link: String,
            startDate: Date,
            endDate: Date
        }
    ],
    certificates: [
        {
            courseName: String,
            issuer: String,
            issueDate: String,
            expirationDate: Date,
            credentialURL: String
        }
    ],
    volunteer: [
        {
            role: String,
            organisation: String,
            cause: String,
            description: String,
            startDate: Date,
            endDate: Date,

        }
    ],
    experience: [
        {
            title: String,
            company: String,
            location: String,
            employementType: String,  //part-time, full-time
            startDate: Date,
            endDate: Date
        }
    ],
    savedVisitors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Visitors"
    }],
    appliedVisitors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Visitors"
    }]
});

module.exports = mongoose.model('Student', Student);
