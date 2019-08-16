const express = require('express');
const router = express.Router();
const apresentadorController = require('../controllers/apresentador');

router.route('/apresentador/:id([0-9]+)')
    .get(apresentadorController.findById)
    .delete(apresentadorController.remove);

router.route('/apresentador')
    .post(apresentadorController.save)
    .get(apresentadorController.findAll)
    .put(apresentadorController.update);

module.exports = router;