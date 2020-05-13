const jwt = require('jsonwebtoken')
const { key } = require('../auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization']

    if(!authHeader) {
        return res.status(404).send('NO TOKEN PROVIDED')
    }

    const parts = authHeader.split(' ')
    if(parts.length !== 2) {
        return res.status(404).send('INVALID TOKEN')
    }

    const [ scheme, token ] = parts
    if(!/^Bearer$/i.test(scheme)) {
        return res.status(404).send('INVALID TOKEN')
    }
        
    jwt.verify(token, key, (err, decoded) => {
        if(err) {
            return res.status(404).send('INVALID TOKEN')
        }

        req.id = decoded.id

        return next()
    })
        
}