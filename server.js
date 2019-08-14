const express = require('express');
const compression = require('compression');
const app = express();
const bodyparser = require('body-parser');
app.use(compression());
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
const port = process.env.PORT || 8000;
const routerInicial = express.Router();
const routerAluno = require('./app/routes/aluno');
const routerSalaAula = require('./app/routes/salaaula');

routerInicial.get('/status', (req, res) => {
    res.json({status:'ok'});
});


routers = [
    routerInicial,
    routerAluno,
    routerSalaAula
];

app.use('/api', routers);
app.listen(port);