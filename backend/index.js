import express from 'express'
import db from './db'
import userRoutes from './modules/users/routes'
import quizRoutes from './modules/quizes/routes'
const app = express()
const port = 3000

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.json({ message: "Nothing to see here" })
})

app.use('/users', userRoutes)
app.use('/quiz', quizRoutes)

app.listen(port, () => {
  console.log(`Quiz Maker backend listening on port ${port}`)
})