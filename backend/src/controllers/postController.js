const knex = require('../../config/db')

exports.postCreate = (req, res) => {
    knex('posts').insert({
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        userId: req.body.userId
    }).then(resp => res.send('SUCESSO!'))
    .catch(err => res.send(err))
}

exports.postRead = (req, res) => {
    knex('posts').select()
        .then(resp => res.json(resp))
        .catch(err => res.send(err))
}