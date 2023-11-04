import db from './connection'
import { neko } from '../../models/neko'

export async function getAllNeko(): Promise<neko[]> {
  return await db('neko').select('*')
}
