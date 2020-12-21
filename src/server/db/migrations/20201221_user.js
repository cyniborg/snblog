exports.up = (knex, Promise) => {
    return knex.schema.createTable('user', (table) => {
        table.increments('user_id');
        table.string('email').unique().notNullable();
        table.string('first_name');
        table.string('last_name');
        table.boolean('admin').notNullable().defaultTo(false);
        table.string('password').notNullable();
        table.timestamps();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user');
}