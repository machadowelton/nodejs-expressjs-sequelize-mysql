const express = require('express');
const router = express.Router();
const salaAulaControler = require('../controllers/salaaula');

router.route('/salaaula/:id([0-9]+)')
    .get(salaAulaControler.findById)
    .delete(salaAulaControler.remove);
router.route('/salaaula')
    .get(salaAulaControler.findAll)
    .post(salaAulaControler.save)
    .put(salaAulaControler.update);

module.exports =  router ;