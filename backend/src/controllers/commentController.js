const knex = require('../../config/db')

exports.createComment = (req, res) => {
    knex('comments').insert({
        author: req.body.author,
        comment: req.body.comment,
        postId: req.body.postId,
        userId: req.body.userId
    })
    .then(resp => res.send('SUCESSO'))
    .catch(err => res.send(err))
}

exports.getComment = (req, res) => {
    knex('comments').where({
        postId: req.query.postId
    })
    .then(resp => res.json(resp))
    .catch(err => res.send(err))
}