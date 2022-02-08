const { Router } = require('express');
const router = Router();

const Example = require('../models/example');

router.get('/', async (req, res) => {
    const examples = await Example.find().exec();
    res.status(200).send(examples);
})

module.exports = router;
