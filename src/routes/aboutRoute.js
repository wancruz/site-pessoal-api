const express = require('express');

const aboutController = require('../controllers/aboutController');

const router = express.Router();

router.get('/1', aboutController.getAbout );

router.post('/', aboutController.createAbout );

router.put('/1', aboutController.updateAbout );

router.delete('/1', aboutController.deleteAbout );


module.exports = router;