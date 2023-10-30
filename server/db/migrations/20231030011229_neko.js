// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
export function up(knex) {
  return knex.schema.createTable('neko', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('breed')
    table.string('owner')
    table.string('facts')
    table.string('location')
    table.string('image')
  })
}

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
export function down(knex) {
  return knex.schema.dropTableIfExists('neko')
}
