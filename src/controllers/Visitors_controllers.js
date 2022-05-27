const { BSONType, ObjectId } = require('mongodb');
const Visitors = require('../models/visitorSchema');

module.exports.getAllVisitors = async (req, res) => {
    try {
        const visitor = await Visitors.find()
            .populate({ path: 'studentsApplied', select: '_id userId fullName rollno department selectedVisitors' })
            .populate({ path: 'studentsSaved', select: '_id userId fullName rollno department' })
            .populate({ path: 'selectedStudents', select: '_id userId fullName rollno department selectedVisitors' })
        if (!visitor) {
            res.status(404).send({ message: 'Visitors not found!' })
        }
        res.status(200).send({ success: true, count: visitor.length, visitor });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getVisitorsById = async (req, res) => {
    try {
        const applied = await Visitors.findById(req.params._id)
            .populate({ path: 'studentsApplied', select: 'userId fullName email' })
            .populate({ path: 'selectedStudents', select: 'userId fullName email' })
        if (!applied) {
            res.status(404).send({ message: 'No students applied!' })
        }
        res.status(200).send({ success: true, applied });
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createVisitors = async (req, res) => {
    try {
        const visitor = await Visitors.create(req.body)
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        if (error.code === 11000) res.status(409).send({ success: false, message: 'Visitors already exist' })
        console.log(error.code)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateVisitors = async (req, res) => {

    try {
        const visitors = await Visitors.findByIdAndUpdate(req.params._id, req.body)
        res.status(201).send({ success: true, visitors })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateAppliedStudents = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndUpdate(req.body.appliedVisitors, { $push: { studentsApplied: ObjectId(req.body._id) } });
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateSavedStudents = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndUpdate(req.body.savedVisitors, { $push: { studentsSaved: ObjectId(req.body._id) } });
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.removeSavedStudents = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndUpdate(req.body.savedVisitors, { $pull: { studentsSaved: ObjectId(req.body._id) } });
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateSelectedStudents = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndUpdate(req.body.selectedVisitors, { $push: { selectedStudents: ObjectId(req.body._id) } });
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.removeSelectedStudents = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndUpdate(req.body.SelectedVisitors, { $pull: { selectedStudents: ObjectId(req.body._id) } });
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.deleteVisitors = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndDelete(req.params._id)
        res.status(201).send({ success: true, message: 'Deleted...' })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}