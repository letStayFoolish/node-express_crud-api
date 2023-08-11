import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)
app.get('/', (req, res) => res.send('Welcome to the Users API!'))
app.get('/*', (req, res) => res.send(`You have tried reaching a route that doesn't exist!`))

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))
