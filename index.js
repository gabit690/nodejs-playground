require('dotenv').config();
const express = require('express');
const color = require('colors');
const routerExample = require('./src/routers/router');

const server = express();

server.use(express.static(__dirname + '/public'));
server.use('/router', routerExample);

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`.blue);
});


