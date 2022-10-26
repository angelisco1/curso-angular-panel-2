const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()

app.post('/login', (req, res) => {
  return res.status(200).json({ ok: true })
})


app.listen(3005, () => {
  console.log('Escuchando peticiones en http://localhost:3005')
})