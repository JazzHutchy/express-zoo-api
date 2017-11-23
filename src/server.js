const express = require('express')
// const ticketsRouter = require('./routes/tickets')
// const animalsRouter = require('./routes/animals')

const server = express()

// server.use('/', ticketsRouter)
// server.use('/', animalsRouter)

server.use('/', [
  require('./routes/tickets'),
  require('./routes/animals')
])

server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})