var express = require('express');

var Controller= require('../controllers/controllers');
var router=express.Router();

router.post('/datos-curso',Controller.datosCurso);
router.post('/test',Controller.test);

//routes Utiles(Crud)
router.post('/crear', Controller.crear);

module.exports= router;

