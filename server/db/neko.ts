import db from './connection'

export async function getAllNeko() {
  return await db('neko').select('*')
}
