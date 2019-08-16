const { SalaAula } = require('../models')

module.exports = {
    findById(req, res) {
        return SalaAula.findByPk(req.params.id)
            .then((salaaula) => {
                if (!salaaula) throw ({ mensagem: 'Nada encontrado' });
                res.json(salaaula)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    save(req, res) {
        return SalaAula.create(req.body)
            .then((salaaula) => {
                res.json(salaaula)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    findAll(req, res) {
        return SalaAula.findAll()
            .then((salaaulas) => {
                if (!salaaulas) throw ({ mensagem: 'Nada encontrado' });
                res.json(salaaulas);
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    update(req, res) {
        saUp = req.body;
        return SalaAula.findByPk(saUp.id)
            .then((salaaula) => {
                if (!salaaula) throw ({ mensagem: 'Nada encontrado' });
                salaaula.update(saUp)
                    .then((salaaulaUp) => {
                        if (!salaaulaUp) throw ({ mensagem: 'Nada encontrado' });
                        return res.json(salaaulaUp);
                    })
                    .catch((err) => {
                        return res.status(500).json({ mensagem: ' Nao atualizado' });
                    })
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
    remove(req, res) {
        return SalaAula.findByPk(req.params.id)
            .then((salaaula) => {
                if (!salaaula) throw ({ mensagem: 'Nao deletado' })
                salaaula.destroy()
                    .then(() => {
                        return res.json({ mensagem: 'Deletado' });
                    })
                    .catch((err) => {
                        return res.status(500).json({ mensagem: 'Ocorreu um erro' })
                    });
            })
            .catch((err) => {
                return res.status(500).json(err);
            });
    },
};