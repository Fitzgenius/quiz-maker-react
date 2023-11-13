import express from 'express'
import db from '../../db'

const router = express.Router()

router.get('/:id', (req, res) => {
  db.query(`SELECT id FROM users WHERE id = ${db.escape(req.params.id)}`, (err, rows, fields) => {
    let result
    if (err) {
      result = { error: err }
    } else {
      if (rows.length === 0) {
        result = { 
          error: "User does not exist",
        }
      } else {
        result = rows[0]
      }
    }
    res.json(result)
  })
})

router.post('/authenticate', (req, res) => {

})

export default router
