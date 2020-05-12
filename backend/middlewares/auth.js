const jwt = require('jsonwebtoken')
const { key } = require('../auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers['Authorization']

    if(!authHeader) {
        return res.send('NO TOKEN PROVIDED')
    }

    const parts = authHeader.split(' ')
    if(parts.length !== 2) {
        return res.send('INVALID TOKEN')
    }

    const [ scheme, token ] = parts
    if(!/^Bearer$/i.test(scheme)) {
        return res.send('INVALID TOKEN')
    }
        
    jwt.verify(token, key, (err, decoded) => {
        if(err) {
            return res.send('INVALID TOKEN')
        }

        req.id = decoded.id

        return next()
    })
        
}