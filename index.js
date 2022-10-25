require('dotenv').config();
const express = require('express');
const server = express();
const color = require('colors');
const routerExample = require('./src/router');
const { printLogged, addRequestTime,errorHandling } = require('./src/middleware');

// Uses
server.use(express.static(__dirname + '/public'));
server.use(printLogged);
server.use(addRequestTime);
server.use(errorHandling);

// Routers
server.use('/router', routerExample);

// Requests
server.get('/', (req, res) => {
    console.log('Welcome USER'.rainbow);
    console.log(req.requestDate);
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`.blue);
});
