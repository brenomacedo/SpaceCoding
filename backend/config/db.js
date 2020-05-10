const config = require('../knexfile')
const knex = require('knex')(config['development'])
knex.migrate.latest([config['development']])
module.exports = knex