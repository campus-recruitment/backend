const router = require('express').Router()

const Users = require('../controllers/users')

router.post("/register", Users.register);
router.post("/login", Users.login);
// router.post("/reset-password", Users.resetPassword);

module.exports = router;
