import * as Path from 'node:path'

import express from 'express'


const server = express()
server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server

// APPROACH //
// back end to front end!
// maybe do databases first? easiest way to go as can see what the data will look like so will be easier to build everything (especially as can see stuff pop up sooner!)
// then generic routing - aim just for a home page with the list of cats to start with
// have most basic front end initially
// then do individual cat pages - maybe have a next button which displays the "next" cat in the home page list rather than having to go home before seeing another one!