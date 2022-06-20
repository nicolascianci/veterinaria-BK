const express = require('express')
const app = express()
require('./database/db')

app.use(express.json())
app.use(express.urlencoded())

app.listen(port, () => {
    console.log('Corriendo en puerto ' + port)
  })