const knex = require('../../config/db')

exports.postCreate = (req, res) => {

    const post = {
        author: req.body.author,
        description: req.body.description,
        image: req.body.image,
        userId: req.body.userId
    }

    knex('posts').insert(post).then(resp => res.json(post))
    .catch(err => res.send(err))
}

exports.postRead = (req, res) => {
    knex('posts').select()
        .then(resp => res.json(resp))
        .catch(err => res.send(err))
}