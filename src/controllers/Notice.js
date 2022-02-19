const { express } = require('express');
const router = Router();

const Notice = require('../models/Notice');

router.get('getAllNotice/', async (req, res) => {
    const notice = await Notice.find().exec();
    res.status(200).send(notice);
})

router.get('getAllNotice/:id', async (req, res) => {
    const notice = await Notice.findById(req.params.id).exec();
    res.status(200).send(notice);
})

router.post('createNotice/', async (req, res) => {
    const notice = await Notice.create(req.body);
    res.status(200).send(notice);
})

router.put('updateNotice/:id', async (req, res) => {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(notice);
})

router.delete('deleteNotice/:id', async (req, res) => {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    res.status(200).send(notice);
})

module.exports = router;
