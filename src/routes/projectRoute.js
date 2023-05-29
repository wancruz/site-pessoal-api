const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/', projectController.getProject);

router.get('/:id', projectController.getProjectById);

router.post('/', projectController.createProject);

router.put('/:id', projectController.updateProject);

router.delete('/:id', projectController.deleteProject);

module.exports = router;
