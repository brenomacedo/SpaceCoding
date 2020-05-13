const knex = require('../../config/db')

exports.tokenId = (req, res) => {
    return res.json(req.id)
}

exports.tokenUser = async (req, res) => {
    const user = await knex('users').where({
        id: req.query.id
    }).first()

    return res.json(user)
}