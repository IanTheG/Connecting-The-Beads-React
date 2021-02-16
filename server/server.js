const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 8080
const corsOptions = { origin: 'https://localhost:1234' }

app.use(logger('dev'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('../client/dist'))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/dist'))
// }

// app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
