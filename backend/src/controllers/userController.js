const knex = require('../../config/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { key } = require('../../auth.json')

exports.createUser = async (req, res) => {

    const password = await bcrypt.hash(req.body.password, 10)

    const token = jwt.sign({}, key, { expiresIn: '86400' })

    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: password,
        image: req.body.image
    }

    knex('users').insert(user).then(resp => res.json({ user, token }))
    .catch(err => res.send(err))
}

exports.getUser = async (req, res) => {
    const User = await knex('users').where({ username: req.query.username })
    .orWhere({ email: req.query.email })
    .first()

    const token = jwt.sign({ id: User.id }, key, { expiresIn: '86400' })

    if(!User) {
        return res.send('USUARIO OU SENHA INCORRETOS')
    }

    if(!await bcrypt.compare(req.query.password, User.password)) {
        return res.send('USUARIO OU SENHA INCORRETOS')
    }

    return res.json({user: User, token})

}