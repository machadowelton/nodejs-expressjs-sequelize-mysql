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
        return Aluno.findAll({ where: { salaAulaId: req.params.id } })
            .then((alunos) => {
                if (!alunos) throw ({ mensagem: 'Nao encontrado' })
                res.json(alunos);
            })
            .catch((err) => {
                ;
                res.status(500).json(err);
            });
    },
    save(req, res) {
        return Aluno.create(req.body)
            .then((aluno) => {
                if (!aluno) throw ({ mensagem: 'Ocorreu um erro' })
                res.json(aluno);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    update(req, res) {
        alunoUp = req.body;
        return Aluno.findByPk(alunoUp.id)
            .then((aluno) => {
                if(!aluno) throw ({mensagem: 'Nao encontrado'});
                aluno.update(alunoUp)
                    .then((alunoupd) => {
                        if(!alunoupd) throw({mensagem: 'Nao atualizado'});                        
                        return res.json({mensagem: 'Atualizado'});
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    remove(req, res) {
        return Aluno.findByPk(req.params.id_aluno)
            .then((aluno) => {
                if(!aluno) throw({mensagem: 'Não deletado'});
                aluno.destroy()
                    .then(() => {
                        return res.json({mensagem: 'Deletado'});
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    }
};