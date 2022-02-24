
const Result = require('../models/Result');

module.exports.getAllResults = async (req, res) => {
    try {
        const results = await Result.find()
            .populate({ path: 'visitors', select: '_id companyName positionName packages selectedStudents' })
        if (!results) {
            res.status(404).send({ message: 'Results not found!' })
        }
        res.status(200).send({ success: true, count: results.length, results });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getResultsById = async (req, res) => {
    try {
        const result = await Result.findOne(req.params._id)
            .populate({ path: 'visitors', select: '_id companyName positionName packages selectedStudents' })

        if (!result) {
            res.status(404).send({ message: 'result not found!' })
        }
        res.status(200).send({ success: true, result });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createResult = async (req, res) => {

    try {
        const result = await Result.create(...req.body)
        res.status(201).send({ success: true, result })
    } catch (error) {
        if (error.code === 11000) res.status(409).send({ success: false, message: 'result already exist' })
        console.log(error.code)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateResult = async (req, res) => {
    try {
        const result = await Result.findByIdAndUpdate(req.params._id, req.body)
        res.status(201).send({ success: true, result })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.deleteResult = async (req, res) => {
    try {
        const result = await Result.findByIdAndDelete(req.params._id)
        res.status(201).send({ success: true, result })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}
