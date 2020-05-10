exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary()
        table.string('author').notNull()
        table.string('description').notNull()
        table.integer('userId').references('id')
        .inTable('users').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
