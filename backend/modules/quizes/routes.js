import express from 'express'
import db from '../../db'

const router = express.Router()

router.get('/', (req, res) => {
  db.query(`SELECT * FROM quizes`, (err, rows, fields) => {
    let result
    if (err) {
      result = { error: err }
    } else {
      if (rows.length === 0) {
        result = { 
          error: "No quizes exist in the database", 
        }
        res.json(result)
      } else {
        res.json(rows)
      }
    }
  })
})

router.get('/:id', (req, res) => {
  db.query(`SELECT id, name FROM quizes WHERE id = ${db.escape(req.params.id)}`, (err, rows, fields) => {
    let result
    if (err) {
      result = { error: err }
    } else {
      if (rows.length === 0) {
        result = { 
          error: "Quiz does not exist", 
        }
        res.json(result)
      } else {
        const {
          id,
          name
        } = rows[0]
        result = {
          id: id,
          name: name,
          questions: []
        }
        // Get questions associated with the quiz ID 
        db.query(`SELECT * FROM questions WHERE quiz_id = ${id}`, (questionErr, questions, questionFields) => {
          if(questions.length) result.questions.push(questions[0])
          res.json(result)
        })
      }
    }
  })
})

export default router
