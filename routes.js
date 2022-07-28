const { Router } = require('express')
const routes = Router();
const CharacterController = require('./controller/CharacterController')


 routes.get('/character', CharacterController.show);
 routes.post('/character', CharacterController.create);

 module.exports = routes