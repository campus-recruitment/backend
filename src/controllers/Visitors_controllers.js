const Visitors = require('../models/visitorSchema');

module.exports.getAllVisitors = async (req, res) => {
    try {
        const visitor = await Visitors.find();
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
        const visitor = await Visitors.findById(req.params._id);
        if (!visitor) {
            res.status(404).send({ message: 'Visitor not found!' })
        }
        res.status(200).send({ success: true, visitor });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createVisitors = async (req, res) => {

    try {
        const visitor = await Visitors.create(req.body)
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        if(error.code === 11000) res.status(409).send({success: false ,message: 'Visitors already exist'})
        console.log(error.code)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateVisitors = async (req, res) => {
    try {
        const visitors = await Visitors.findByIdAndUpdate(req.body)
        res.status(201).send({ success: true, visitors })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.deleteVisitors = async (req, res) => {
    try {
        const visitor = await Visitors.findByIdAndDelete(req.params._id)
        res.status(201).send({ success: true, visitor })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}