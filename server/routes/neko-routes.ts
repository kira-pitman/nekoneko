import express from 'express'
import * as db from '../db/neko'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allNeko = await db.getAllNeko()
    res.json(allNeko)
  } catch (error) {
    res.status(500).send('whoops! your&apos:e catless!')
  }
})

export default router
