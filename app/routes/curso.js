const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/curso');

router.route('/apresentador/:id_apresentador([0-9]+)/curso/:id([0-9]+)')
    .get(cursoController.findByid)
    .delete(cursoController.remove);
router.route('/apresentador/:id_apresentador([0-9]+)/curso')
    .get(cursoController.findAll)
    .post(cursoController.save)
    .put(cursoController.update);

module.exports =  router ;    