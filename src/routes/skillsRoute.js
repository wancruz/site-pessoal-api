const express = require('express');

const skillsController = require('../controllers/skillsController');

const router = express.Router();

router.get('/', skillsController.getSkills);

router.get('/:id', skillsController.getSkillById);

router.post('/', skillsController.createSkill);

router.put('/:id', skillsController.updateSkill);

router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
