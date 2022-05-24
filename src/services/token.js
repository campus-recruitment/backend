const jwt = require('jsonwebtoken');

const { sign: jwtSign, verify: jwtVerify } = jwt

const JWT_SECRET = process.env.JWT_SECRET

function sign(user) {
    return new Promise((resolve, reject) => {
        // console.log(user)
        jwtSign({
            given_name: user.fullName,
            email: user.email,
            _id: user._id,
            user_id: user.userId,
            admin: user.isAdmin
        }, JWT_SECRET, {
            issuer: 'T&P Cell',
            audience: 'Frontend',
            subject: 'authentication',
            expiresIn: '2h',
            notBefore: '-5s'
        }, (err, encoded) => {
            if (err) reject(err)
            else resolve(encoded)
        })
    })
}

function verify(token) {
    return new Promise((resolve, reject) => {
        jwtVerify(token, JWT_SECRET, {
            issuer: 'T&P Cell',
            audience: 'Frontend',
            subject: 'authentication',
            expiresIn: '2h',
            notBefore: '-5s'
        }, (err, decoded) => {
            if(err) reject(err)
            else resolve(decoded)
        })
    })
}

module.exports = { sign, verify }
