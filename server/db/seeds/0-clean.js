export async function seed(knex) {
  await knex('neko').del()
}
