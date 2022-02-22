const mongoose = require('mongoose');
const User = require('../models/users');
const Student = require('../models/student');

// const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const { hashPassword, verifyPassword } = require('../services/auth');
const { sign } = require('../services/token');

const { randomBytes } = require('crypto');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const jsonwebtoken = require('jsonwebtoken');

const { v4: uuidv4 } = require('uuid');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"
    }
}))

module.exports.register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const userId = uuidv4();
        if (!fullName && !email && !password) return res.status(400).send({ success: false, message: 'Name, Email or password not provided' })
        const hash = await hashPassword(password);
        const session = await mongoose.startSession()
        await session.withTransaction(async () => {
            await User.create({
                fullName,
                email,
                password: hash,
                userId
            })
            await Student.create({
                fullName,
                email,
                userId
            })
        })
        return res.status(201).send({ success: true, message: 'User registered' })
    } catch (error) {
        console.log(error)
        if (error.code == 11000) {
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
        if (isValid) {
            const student = await Student.findOne({ email })
            const token = await sign(student)
            return res.status(200).send({ success: true, message: 'Login successful', result: { token, user: jsonwebtoken.decode(token) } })
        } else return res.status(401).send({ success: false, message: 'Invalid email or password' })
    } catch (error) {
        console.log(error)
        return res.status(401).send({ success: false, message: 'Internal server error' })
    }
}

module.exports.resetPassword = async (req, res) => {
    try {
        const token = randomBytes(32).toString('hex');
        User.findOne({email: req.body.email})
            .then(user => {
                if(!user) return res.status(404).send({success: false, message: 'User not registerd..'})
                user.resetToken = token
                user.expireToken = Date.now() + (60 * 60 * 1000)
                user.save().then(result => {
                    console.log(user)
                    transporter.sendMail({
                        to: user.email,
                        from: "kitsrecruitment1@gmail.com",
                        subject: "Reset Password",
                        html: `<p>You requested for password reset</p>
                        <h5>Click on this <a href="http://localhost:3000/reset-password/${token}"> link </a> to reset password.</h5>`
                    }).then(() => console.log('email send...'))
                    return res.status(201).send({success: true, message: 'Check your email!!'})
                })
            })
        
    } catch (error) {
        console.log(error)
    }
}