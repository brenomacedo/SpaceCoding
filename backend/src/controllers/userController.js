const knex = require('../../config/db')

exports.createUser = (req, res) => {
    knex('users').insert({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image
    }).then(resp => res.send('SUCESSO'))
    .catch(err => res.send(err))
}

exports.getUser = (req, res) => {
    knex('users').where({ username: req.query.username, password: req.query.password })
    .orWhere({ email: req.query.email, password: req.query.password })
    .first()
    .then(resp => res.json(resp))
    .catch(err => res.send(err))
}