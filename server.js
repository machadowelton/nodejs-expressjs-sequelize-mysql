const express = require('express');
const compression = require('compression');
const app = express();
const bodyparser = require('body-parser');
app.use(compression());
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
const port = process.env.PORT || 8000;
const router = express.Router();
const bcrypt = require('bcrypt');


function middleAuthentication(req, res, next) {    
    next();
}

router.post('/authentication', middleAuthentication, (req, res, next)=> {
    res.send('ok');
});

app.use('/api', router);
app.listen(port);