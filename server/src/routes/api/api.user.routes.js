const express = require('express');
const router = express.Router();
const userController = require('../../controllers/usersController');

router.post('/', userController.register); 
router.get('/', userController.getAll); 

module.exports = router;
