const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/aluno');


router.route('/salaaula/:id([0-9]+)/aluno/:id_aluno([0-9]+)')
    .get(alunoController.findById)
    .delete(alunoController.remove);

router.route('/salaaula/:id([0-9]+)/aluno')
    .get(alunoController.findAll)
    .post(alunoController.save)
    .put(alunoController.update);    


module.exports =  router ;