const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Visitors = new Schema({
    
    companynane: {
        type: String,
        required: true,
    },
    positionname: {
        type: String
    },
    dataadded: {
        type: String
    },
    skillsrequired: {
        type: Number
    },
    description: {
        type: Number
    },
    location: {
        type: String,
    },
    packages: {
        Type: Boolean,
        default: false
    },
    vacancies: {
        type: Number
    },
    criteria: {
        type: String
    },
    aboutcompany: {
        type: String
    },
    companylogo: {
        type: String
    },
    otherLinks: {
        type: String
    },
    fulltime: {
        type: [String]
    },
    noofappliedjobs: {
        type: [String]
    },
    hiringprocess: {
        type: [String]
    },
    timing: {
        type: [string]
    },
    certificate : { 
        type: [string]
    },
    timing: {
        type: [string] 
    },
    duedate: {
        type : [string]
    },

module.exports = mongoose.model('Visitors', Visitors);