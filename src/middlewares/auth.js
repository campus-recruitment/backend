const { verify } = require("../services/token")

const auth = async function(req, res, next) {
    try {
        const authHeader = req.get('Authorization')
        const token = authHeader.split(' ')[1]
        const user = await verify(token)
        if(!user) return res.status(403).send({ success: false, message: 'User not authorized to access the content' })
        res.locals = user.user
        next()
    } catch (error) {
        return res.status(403).send({ status: false, message: 'User not authorized to access the content' })
    }
}

module.exports = auth