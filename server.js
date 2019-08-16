const express = require('express');
const compression = require('compression');
const app = express();
const bodyparser = require('body-parser');
app.use(compression());
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
const port = process.env.PORT || 8000;
const routeInicial = express.Router();
const routeAluno = require('./app/routes/aluno');
const routeSalaAula = require('./app/routes/salaaula');
const routeApresentador = require('./app/routes/apresentador');
const routeCurso = require('./app/routes/curso');
const routeAlunoCurso = require('./app/routes/alunocurso');



routeInicial.get('/status', (req, res) => {
    res.json({status:'ok'});
});

routes = [
    routeInicial,
    routeAluno,
    routeSalaAula,
    routeApresentador,
    routeCurso,
    routeAlunoCurso
];

app.use('/api', routes);
app.listen(port);