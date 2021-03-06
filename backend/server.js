const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

const port = process.env.PORT || 3300

app.use(require('./app/routes'))

app.listen(port, () => {
  console.log(`Ticket fetcher started http://localhost:${port}`)
})