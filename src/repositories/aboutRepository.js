const { pool } = require('../config/db')

exports.getAbout = async () => {
  const result = await pool.query('SELECT * FROM sobre ')
  return result.rows[0]
}

exports.createAbout = async about => {
  const result = await pool.query(
    `INSERT INTO sobre (id, foto, resumo) 
     VALUES (1, $1, $2) 
     RETURNING *`,
    [about.foto, about.resumo]
  )
  return result.rows[0]
}

exports.updateAbout = async about => {
  const result = await pool.query(
    `UPDATE sobre SET foto = $1, resumo = $2
    WHERE id = 1
    RETURNING *`,
    [about.foto, about.resumo]
  )
  return result.rows[0]
}

exports.deleteAbout = async () => {
  await pool.query('DELETE FROM sobre WHERE id = 1')
}
