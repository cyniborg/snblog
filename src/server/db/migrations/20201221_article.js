exports.up = (knex, Promise) => {
    return knex.schema.createTable('article', (table) => {
        table.increments('article_id');
        table.string('title').unique().notNullable();
        table.text('description').notNullable();
        table.text('images', 'mediumtext');
        table.boolean('published').notNullable().defaultTo(false);
        table.integer('created_by').unsigned().notNullable();
        table.foreign('created_by').references('user_id').inTable('user');
        table.timestamps();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('article');
}