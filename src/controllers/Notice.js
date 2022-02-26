
const Notice = require('../models/notice');

module.exports.getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find()
        if (!notices) {
            res.status(404).send({ message: 'Notices not found!' })
        }
        res.status(200).send({ success: true, count: notices.length, notices });

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getNoticesById = async (req, res) => {
    try {
        const notice = await Notice.findById(req.params._id)

        if (!notice) {
            res.status(404).send({ message: 'notice not found!' })
        }
        res.status(200).send({ success: true, notice });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.createNotice = async (req, res) => {
    try {
        const notice = await Notice.create(req.body)
        res.status(201).send({ success: true, notice })
    } catch (error) {
        if (error.code === 11000) res.status(409).send({ success: false, message: 'notice already exist' })
        console.log(error)
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.updateNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndUpdate(req.params._id , req.body)
        res.status(201).send({ success: true, notice })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndDelete(req.params._id)
        res.status(201).send({ success: true, notice })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}

module.exports.getNoticesByDate = async (req, res) => {
    try {
        const notice = await Notice.find({date: req.params.date})
        res.status(201).send({ success: true, notice })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal Error...' })
    }
}
