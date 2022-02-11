const { Router } = require('express');
const router = Router();

const Example = require('../models/example');

router.get('/', async (req, res) => {
    const examples = await Example.find().exec();
    res.status(200).send(examples);
})

router.get('/:id', async (req, res) => {
    const examples = await Example.findById(req.params.id).exec();
    res.status(200).send(examples);
})

router.post('/', async (req, res) => {
    const examples = await Example.create(req.body);
    res.status(200).send(examples);
})

router.put('/:id', async (req, res) => {
    const example = await Example.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(example);
})

router.delete('/:id', async (req, res) => {
    const example = await Example.findByIdAndDelete(req.params.id);
    res.status(200).send(example);
})

module.exports = router;
