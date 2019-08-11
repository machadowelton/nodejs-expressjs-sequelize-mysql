const express = require('express');
const compression = require('compression');
const app = express();
const bodyparser = require('body-parser');
app.use(compression());
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
const port = process.env.PORT || 8000;
const router = express.Router();


router.get('/status', (req, res) => {
    res.json({message:'ok'});
});

app.use('/api', router);
app.listen(port);