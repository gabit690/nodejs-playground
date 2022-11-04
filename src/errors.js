require('dotenv').config();
const express = require('express');
require('colors');
const fs = require('fs');
const app = express();

// Uses
app.use(express.static(__dirname + '/public'));

// Requests
app.get('/', (req, res) => {
    const error = new Error('Broken');
    throw error;
});

app.get('/file', (req, res, next) => {
    fs.readFile('./src/test.txt', (err, data) => {
        if (err) {
            next(err);
        } else {
            res.end(data);
        }
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`.yellow);
});
