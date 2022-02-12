const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    studentId: {
        type: mongoose.Types.ObjectId
    },
    fullName: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        unique: true,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    graduationYear: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    picture: {
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
    signUpDate: {
        type: Date
    },
    // savedVisitors: {
    //     type: [mongoose.Types.ObjectId],
    //     ref: "Visitors",
    //     default: []
    // },
    // appliedVisitors:
    // {
    //     type: [mongoose.Types.ObjectId],
    //     ref: "Visitors",
    //     default: []
    // }
});

module.exports = mongoose.model('Student', Student);
