// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */

export async function seed(knex) {
  await knex('neko').insert([
    {
      id: 1,
      name: 'Bug',
      breed: 'Misc',
      owner: 'Sonya',
      location: 'Petone',
      facts: 'A polite yet street savvy lady',
      image: '',
    },
    {
      id: 2,
      name: 'Moo',
      breed: 'Misc',
      owner: 'Sonya',
      location: 'Petone',
      facts: 'A diva with a side serving of bombastic side eye',
      image: '',
    },
    {
      id: 3,
      name: 'Oscar',
      breed: 'Ragdoll',
      owner: 'Miriam and Angus',
      location: 'Scotland',
      facts: 'A sickly victorian prince who hates the commoners',
      image: '',
    },
    {
      id: 4,
      name: 'Edgar',
      breed: 'Maine Coon',
      owner: 'Miriam and Angus',
      location: 'Scotland',
      facts:
        'Screams at ceiling bugs and has anxiety (best friends with Helen)',
      image: '',
    },
    {
      id: 5,
      name: 'Bonnie',
      breed: 'Maine Coon',
      owner: 'Dom',
      location: 'Newtown',
      facts: 'Swamp creature and pillow pirincess',
      image: '',
    },
  ])
}
