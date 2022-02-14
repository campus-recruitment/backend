const mongoose = require('mongoose');
const User = require('../models/users');
const Student = require('../models/student');

const { hashPassword, verifyPassword } = require('../services/auth');
const { sign } = require('../services/token');

module.exports.register = async (req, res) => {
    try {
        const {fullName, email, password } = req.body;
        if(!fullName && !email && !password) return res.status(400).send({success: false, message: 'Name, Email or password not provided'})
        const hash = await hashPassword(password);
        const session = await mongoose.startSession()
        await session.withTransaction(async () => {
            await User.create({
                fullName,
                email,
                password: hash
            })
            await Student.create({
                fullName,
                email
            })
        })
        return res.status(201).send({success: true, message: 'User registered'})
    } catch (error) {
        console.log(error)
        if(error.code == 11000) {
            return res.status(409).send({ success: false, message: 'EmailId already in use' })
        } else return res.status(500).send({ success: false, message: 'Internal server error' })
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(404).send({ success: false, message: 'You are not registered' })
        const isValid = await verifyPassword(user.password, password)
        if(isValid) {
            const student = Student.findOne({ email })
            const token = await sign(student)
            return res.status(200).send({ success: true, message: 'Login successful', result: { token }})
        } else return res.status(401).send({ success: false, message: 'Invalid email or password' })
    } catch (error) {
        console.log(error)
        return res.status(401).send({ success: false, message: 'Internal server error' })
    }
}
