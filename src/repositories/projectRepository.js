const { pool } = require('../config/db')

exports.getProject = async () => {
  const result = await pool.query('SELECT * FROM projetos')
  return result.rows
}

exports.getProjectById = async id => {
  const result = await pool.query('SELECT * FROM projetos WHERE id = $1', [id])
  return result.rows[0]
}

exports.createProject = async project => {
  const result = await pool.query(
    'INSERT INTO projetos (title, image, link) VALUES ($1, $2, $3) RETURNING *',
    [project.title, project.image, project.link]
  )
  return result.rows[0]
}

exports.updateProject = async (id, project) => {
  const result = await pool.query(
    'UPDATE projetos SET title = $1, image = $2, link = $3 WHERE id = $4 RETURNING *',
    [project.title, project.image, project.link, id]
  )
  return result.rows[0]
}

exports.deleteProject = async id => {
  await pool.query('DELETE FROM projetos WHERE id = $1', [id])
}
