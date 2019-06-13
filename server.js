const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3001;

const app = express();
require('./models/index.js');

app.use(express.static(path.join(__dirname, './build')))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.text())
    .use(bodyParser.json())
    .use('/api/v1.0', require('./routes/api/v1.0/cookList/index'));



app.use((req, res, next) => {
    //res.sendFile(path.join(__dirname + '/build/error.html'));
    res.status(404).json({
        err: '404',
        message: '404-not found :('
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        err: '500',
        message: err.message
    });
});

app.listen(port, () => {
    if (!fs.existsSync('./build/img/cookIcon')) {
        fs.mkdirSync('./build/img/cookIcon');
    }
    console.log(`Server running on port : ${port}`);
});