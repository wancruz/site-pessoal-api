const skillsRepository = require('../repositories/skillsRepository');

 exports.getSkills = async (req, res) => {
   const skills = await skillsRepository.getSkills();
   res.json(skills);
 }
 
 exports.getSkillById = async (req, res) => {
   const id = parseInt(req.params.id);
   const skill = await skillsRepository.getSkillById(id);
   res.json(skill);
 }

exports.createSkill = async (req, res) => {
   const skills = req.body;
   const newSkill = await skillsRepository.createSkill(skills);
   res.json(newSkill);
}


exports.updateSkill = async (req, res) => {
   const id = parseInt(req.params.id);
   const skills = req.body;
   const updatedSkill = await skillsRepository.updateSkill(id, skills);
   res.json(updatedSkill);
}


exports.deleteSkill = async (req, res) => {
   const id = parseInt(req.params.id);
   await skillsRepository.deleteSkill(id);
   res.json({message: `Habilidade ${id} deletada com sucesso`}); 
}