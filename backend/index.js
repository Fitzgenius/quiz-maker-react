import express from 'express'
import userRoutes from './modules/users/routes'
import quizRoutes from './modules/quizes/routes'
const app = express()
const port = 3000

const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:3001`)
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`)
  res.header(`Access-Control-Allow-Headers`, `Content-Type`)
  next()
}

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(allowCrossDomain)

app.get("/", (req, res) => {
  res.json({ message: "Nothing to see here" })
})

app.use('/users', userRoutes)
app.use('/quiz', quizRoutes)

app.listen(port, () => {
  console.log(`Quiz Maker backend listening on port ${port}`)
})