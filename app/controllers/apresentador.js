const { Apresentador } = require('../models');

module.exports = {
    findById(req, res) {
        return Apresentador.findByPk(req.params.id)
            .then((apresentador) => {
                if (!apresentador) throw ({ mensagem: 'Nao encontrado' });
                res.json(apresentador);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    findAll(req, res) {
        return Apresentador.findAll()
            .then((apresentadores) => {
                if (!apresentadores) throw ({ mensagem: 'Nao encontrado' });
                res.json(apresentadores);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    save(req, res) {
        return Apresentador.create(req.body)
            .then((apresentadorIn) => {
                if(!apresentadorIn) throw ({mensagem: 'Nao criado'});
                res.json({mensagem: 'Criado', apresentador: apresentadorIn});
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    update(req, res) {
        apresentadorIn = req.body;
        return Apresentador.findByPk(apresentadorIn.id)
            .then((apresentadorRes) =>{
                if(!apresentadorRes) throw({mensagem:'Nao encontrado'});
                apresentadorRes.update(apresentadorIn)
                    .then((apresentadorUp) => {
                        if(!apresentadorUp) throw({mensagem: 'Nao atualizado'});
                        res.json({mensagem:'Atualizado'});
                    })
                    .catch((err) => {
                        res.status(500).json(err);
                    });
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    remove(req, res) {
        return Apresentador.findByPk(req.params.id)
            .then((apresentador) => {
                if(!apresentador) throw({mensagem: 'Nao encontrado'})
                apresentador.destroy()
                    .then(() => {
                        res.json({mensagem: 'Deletado'});
                    })
                    .catch((err) => {
                        res.status(500).json({mensagem: 'Nao deletado'});
                    });
            })
            .catch((errr) => {
                res.status(500).json(err);
            });
    },
};