import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT  || 8080

const corsOptions = {
  origin: 'https://localhost:1234'
}

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true  }))

app.use(express.static('../client/dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
