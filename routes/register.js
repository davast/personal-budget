const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const registerController = require('../controllers/login');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/register', registerController.getRegister);

router.post('/newuser', registerController.postNewUser);

router.post('/verification', registerController.verification);

//exports.successfulRegister = successfulRegister;
//exports.users = users;
module.exports = router;
