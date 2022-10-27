const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const axios = require('axios')


const JWT_SECRET = 'ajhdkhj78d2g3d32g2gyugdy8d732gdhjdgjfs'

const usuariosRegistrados = [
  { id: 0, email: 'cfalco@gmail.com', username: 'Charly Falco', password: '12345678' }
]


const app = express()

app.use(cors())
app.use(express.json())


app.post('/login', (req, res) => {

  const { email, password } = req.body
  console.log({ email, password })

  const usuarioLogin = usuariosRegistrados.find(usuario => usuario.email === email)

  if (!usuarioLogin) {
    return res.status(401).json({ msg: 'Las credenciales son invalidas...' })
  }

  if (usuarioLogin.password !== password) {
    return res.status(401).json({ msg: 'Las credenciales son invalidas...' })
  }

  const token = jwt.sign({ username: usuarioLogin.username }, JWT_SECRET)
  return res.status(200).json({ jwt: token })
})


app.post('/vendehumos', (req, res) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ msg: 'Necesitas un token' })
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET)

    // Guardar el vendehumo en la BBDD
    axios.post('http://localhost:3000/vendehumos', req.body)
      .then((resp) => {
        return res.status(201).json(resp.data)
      })

  } catch (err) {
    return res.status(401).json({ msg: 'Token invalido' })
  }


})


app.listen(3005, () => {
  console.log('Escuchando peticiones en http://localhost:3005')
})