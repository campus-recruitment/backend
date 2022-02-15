const { Router } = require('express');
const router = Router();

const result = require('../models/result');

router.get('/', async (req, res) => {
    const result = await result.find().exec();
    res.status(200).send(result);
})

router.get('/:id', async (req, res) => {
    const result = await Example.findById(req.params.id).exec();
    res.status(200).send(result);
})

router.post('/', async (req, res) => {
    const result = await result.create(req.body);
    res.status(200).send(result);
})

router.put('/:id', async (req, res) => {
    const result = await result.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(result);
})

router.delete('/:id', async (req, res) => {
    const result = await result.findByIdAndDelete(req.params.id);
    res.status(200).send(result);
})

module.exports = router;
