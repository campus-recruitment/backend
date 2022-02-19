const Answer = require('../models/answer');

module.exports.getAllAnswer = async (req, res) => {
    try {
        const Answer = await Answer.find();
        if (!Answer) {
            res.status(404).send({ message: 'Answer not found!' })
        }
        res.status(200).send({ success: true, count: answer.length, answer });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getAnswerById = async (req, res) => {
    try {
        const answer = await Answer.findById(req.params._id);
        if (!answer) {
            res.status(404).send({ message: 'Answer not found!' })
        }
        res.status(200).send({ success: true, answer });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createanswer = async (req, res) => {

    try {
        const answer = await Answer.create
    
        res.status(201).send({ success: true, answer })
    } catch (error) {
        if(error.code === 11000) res.status(409).send({success: false ,message: 'Answer already exist'})
        console.log(error.code)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateAnswer = async (req, res) => {
    try {
        const answer = await answer.findByIdAndUpdate(req.body)
        res.status(201).send({ success: true, answer })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
    module.exports.deleteAnswer = async (req, res) => {
        try {
            const answer = await answer.findByIdAndDelete(req.body)
            res.status(201).send({ success: true, answer })
        } catch (error) {
            res.status(500).send({ success: false, message: 'Internal Error...' })
        }
    }
}
