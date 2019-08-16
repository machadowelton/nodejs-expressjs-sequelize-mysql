const express = require('express');
const router = express.Router();

router.route('/aluno/:id_aluno/curso/:id_curso')
    .get((req, res) => {
        res.json(req.params);
    })
    .delete((req, res) => {
        res.json(req.params);
    });
router.route('/aluno/:id_aluno/curso')
    .get((req, res) => {
        res.json(req.params);
    })
    .post((req, res) => {
        res.json(req.body);
    })
    .put((req, res) => {
        res.json(req.body);
    });

    module.exports = router;