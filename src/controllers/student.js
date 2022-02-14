
const Student = require('../models/student');

module.exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
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
        const student = await Student.findById(req.params._id);
        if (!student) {
            res.status(404).send({ message: 'Students not found!' })
        }
        res.status(200).send({ success: true, student });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createStudent = async (req, res) => {

    try {
        const student = await Student.create({
            ...req.body, signUpDate: new Date()
        })
        res.status(201).send({ success: true, student })
    } catch (error) {
        if(error.code === 11000) res.status(409).send({success: false ,message: 'student already exist'})
        console.log(error.code)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.body)
        res.status(201).send({ success: true, student })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
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
