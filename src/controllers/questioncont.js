const Question = require('../models/question');

module.exports.getAllQuestion = async (req, res) => {
    try {
        const Question = await Question.find();
        if (!Question) {
            res.status(404).send({ message: 'Question not found!' })
        }
        res.status(200).send({ success: true, count: question.length, question });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params._id);
        if (!question) {
            res.status(404).send({ message: 'Question not found!' })
        }
        res.status(200).send({ success: true, question });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createquestion = async (req, res) => {

    try {
        const question = await Question.create
    
        res.status(201).send({ success: true, question })
    } catch (error) {
        if(error.code === 11000) res.status(409).send({success: false ,message: 'question already exist'})
        console.log(error.code)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateQuestion = async (req, res) => {
    try {
        const answer = await answer.findByIdAndUpdate(req.body)
        res.status(201).send({ success: true, question })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
    module.exports.deleteQuestion = async (req, res) => {
        try {
            const question = await question.findByIdAndDelete(req.body)
            res.status(201).send({ success: true,question })
        } catch (error) {
            res.status(500).send({ success: false, message: 'Internal Error...' })
        }
    }
}
