require('dotenv').config();
const express = require('express');
const color = require('colors');

const server = express();

server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`.blue);
});


