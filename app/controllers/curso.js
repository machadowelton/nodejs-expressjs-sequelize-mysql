const { Curso } = require('../models');

module.exports = {
    findByid(req, res) {
        return Curso.findAll({
            where: {
                id: req.params.id,
                apresentadorId: req.params.id_apresentador
            }
        })
            .then((curso) => {
                if (!curso) throw ({ mensagem: 'Nao encontrado' });
                res.json(curso[0]);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    findAll(req, res) {
        return Curso.findAll({
            where: {
                apresentadorId: req.params.id_apresentador
            }
        })
            .then((cursos) => {
                if (!cursos) throw ({ mensagem: 'Nao encontrado' })
                res.json(cursos);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    save(req, res) {
        return Curso.create(req.body)
            .then((cursoSave) => {
                if(!cursoSave) throw ({mensagem: 'Nao criado'})
                res.json({mensagem: 'Criado', curso: cursoSave});
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    update(req, res) {
        cursoReq = req.body;
        return Curso.findByPk(cursoReq.id)
            .then((cursoResult) => {
                if(!cursoResult) throw({mensagem: 'Nao encontrado'});
                cursoResult.update(cursoReq)
                    .then((cursoUpd) => {
                        if(!cursoUpd) throw({mensagem: 'Nao atualizado'});
                        res.json({mensagem: 'Atualizado', curso: cursoUpd});                        
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
        return Curso.findByPk(req.params.id)
            .then((cursoResult) => {
                if(!cursoResult) throw({mensagem: 'Nao encontrado'});
                cursoResult.destroy()
                    .then(() => {
                        res.json({mensagem: 'Deletado'});
                    })
                    .catch((err) => {
                        res.status(500).json({mensagem: 'Nao deletado'});
                    });
            })
            .catch((err) => {   
                res.status(500).json({mensagem: 'Nao deletado'});
            });
    },
};