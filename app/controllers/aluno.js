const { Aluno } = require('../models');

module.exports = {
    findById(req, res) {
        return Aluno.findByPk(req.params.id_aluno)
            .then((aluno) => {
                if (!aluno) throw ({ mensagem: 'Nao encontradao' });
                res.json(aluno);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    findAll(req, res) {
        return Aluno.findAll({ where: { SalaAulaId: req.params.id } })
            .then((alunos) => {
                if (!alunos) throw ({ mensagem: 'Nao encontrado' })
                res.json(alunos);
            })
            .catch((err) => {
                ;
                res.json(err);
            });
    },
    save(req, res) {
        return Aluno.create(req.body)
            .then((aluno) => {
                if (!aluno) throw ({ mensagem: 'Ocorreu um erro' })
                res.json(aluno);
            })
            .catch((err) => {
                res.json(err);
            });
    }
};