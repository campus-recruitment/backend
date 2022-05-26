
const Student = require('../models/student');
const { updateAppliedStudents } = require('./Visitors_controllers');
const { updateSavedStudents } = require('./Visitors_controllers');
const { removeSavedStudents } = require('./Visitors_controllers');

module.exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
            .populate({ path: 'appliedVisitors', select: '_id companyName positionName packages vacancies dueDate' })
            .populate({ path: 'savedVisitors', select: '_id companyName positionName packages vacancies dueDate' })
        if (!students) {
            res.status(404).send({ message: 'Students not found!' })
        }
        res.status(200).send({ success: true, count: students.length, students });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getStudentsById = async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.params.user_id })
            .populate({ path: 'appliedVisitors', select: '_id companyName positionName packages vacancies dueDate' })
            .populate({ path: 'savedVisitors', select: '_id companyName positionName packages vacancies dueDate' })

        if (!student) {
            res.status(404).send({ message: 'Students not found!' })
        }
        res.status(200).send({ success: true, student });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

// module.exports.createStudent = async (req, res) => {

//     try {
//         const student = await Student.create({
//             ...req.body, signUpDate: new Date()
//         })
//         res.status(201).send({ success: true, student })
//     } catch (error) {
//         if (error.code === 11000) res.status(409).send({ success: false, message: 'student already exist' })
//         console.log(error.code)
//         res.status(500).send({ success: false, message: 'Internal Error...' })
//     }
// }

module.exports.updateStudent = async (req, res) => {
    try {
        console.log(req.body)
        const student = await Student.findOneAndUpdate({ userId: req.params.user_id }, req.body)
        res.status(201).send({ success: true, student })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateAppliedVisitor = async (req, res) => {
    try {
        // console.log(req.body)
        const student = await Student.findOneAndUpdate({ userId: req.params.user_id }, { $push: {appliedVisitors: req.body.appliedVisitors} })
        const visitors = await updateAppliedStudents(req, res)
        // res.status(201).send({ success: true, student })
    } catch (error) {
        // res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateSavedVisitor = async (req, res) => {
    try {
        // console.log(req.body.savedVisitors)
        const student = await Student.findOneAndUpdate({ userId: req.params.user_id }, { $push: {savedVisitors: req.body.savedVisitors} })
        const visitors = await updateSavedStudents(req, res)
        // res.status(201).send({ success: true, student })
    } catch (error) {
        // res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.removeSavedVisitor = async (req, res) => {
    try {
        console.log(req.body.savedVisitors)
        // console.log(req.params.user_id)
        const student = await Student.findOneAndUpdate({ userId: req.params.user_id }, { $pull: {savedVisitors: req.body.savedVisitors} })
        console.log(student);
        const visitors = await removeSavedStudents(req, res)
        // res.status(201).send({ success: true, student })
    } catch (error) {
        // res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params._id)
        res.status(201).send({ success: true, student })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getStudentsByDepartment = async (req, res) => {
    try {
        const student = await Student.find({ departmentCode: req.params.departmentCode })
            .populate({ path: 'appliedVisitors', select: '_id companyName positionName packages' })
            .populate({ path: 'savedVisitors', select: '_id companyName positionName packages' })

        if (!student) {
            res.status(404).send({ message: 'Students not found!' })
        }
        res.status(200).send({ success: true, student });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}
