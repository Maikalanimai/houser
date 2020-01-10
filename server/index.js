const express = require('express')
require('dotenv').config()
const ctrl = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

//get houses
app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`listening on server port ${SERVER_PORT}`))
})