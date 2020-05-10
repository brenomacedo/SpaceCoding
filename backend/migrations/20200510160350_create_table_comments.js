
exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('id').primary()
        table.string('author').notNull()
        table.string('comment').notNull()
        table.integer('postId').references('id').inTable('posts')
        table.integer('userId').references('id').inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
};
