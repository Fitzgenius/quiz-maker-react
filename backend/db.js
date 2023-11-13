import mysql from 'mysql'
const db = mysql.createConnection({
  host: 'localhost',
  user: 'quiz',
  password: 'quiz',
  database: 'quiz',
})

export default db
