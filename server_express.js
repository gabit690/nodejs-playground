const express = require('express');
const color = require('colors');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Express Server Ready</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server express on port ${PORT}`.blue);
});