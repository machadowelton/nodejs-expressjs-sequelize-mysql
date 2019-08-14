const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/aluno');


router.route('/salaaula/:id([0-9]+)/aluno/:id_aluno([0-9]+)')
    .get(alunoController.findById);

router.route('/salaaula/:id([0-9]+)/aluno')
    .get(alunoController.findAll)
    .post(alunoController.save);


module.exports =  router ;