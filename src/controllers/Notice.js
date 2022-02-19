const { Notice } = require('express');
const notice = Notice();

const Notice = require('../models/Notice');

notice.get('getallnotice/', async (req, res) => {
    const Notice = await Notice.find().exec();
    res.status(200).send(notice);
})

notice.get('getallnotice/:id', async (req, res) => {
    const notice = await notice.findById(req.params.id).exec();
    res.status(200).send(notice);
})

notice.post('createnotice/', async (req, res) => {
    const notice = await notice.create(req.body);
    res.status(200).send(notice);
})

notice.put('update/:id', async (req, res) => {
    const notice = await notice.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(notice);
})

notice.delete('delete/:id', async (req, res) => {
    const notice = await notice.findByIdAndDelete(req.params.id);
    res.status(200).send(notice);
})

module.exports = notice;
