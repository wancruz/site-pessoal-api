const {pool} = require('../config/db')

exports.getSkills = async () => {
   const result = await pool.query('SELECT * FROM habilidades');
   return result.rows;
} 

exports.getSkillById = async (id) => {
    const result = await pool.query('SELECT * FROM habilidades WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createSkill = async skill => {
    const result = await pool.query(`INSERT INTO habilidades (name, image, tipo) VALUES ($1, $2, $3) RETURNING * 
    `, [skill.name, skill.image, skill.tipo])
    return result.rows[0];
}

exports.updateSkill = async (id, skill) => {
    const result = await pool.query(`UPDATE habilidades SET name = $1, image = $2, tipo = $3 WHERE id = $4 RETURNING *`,
    [skill.name, skill.image, skill.tipo, id]);
    return result.rows[0];
}

exports.deleteSkill = async (id) => {
   await pool.query(`DELETE FROM habilidades WHERE id = $1`, [id]);
}
