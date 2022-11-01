require('dotenv').config();
const express = require('express');
const app = express();
const color = require('colors');

// Template engine
app.set('view engine', 'pug');

// Requests
app.get('/', (req, res) => {
    res.render('index', { title: 'Express practice', message: 'Html template engine.'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`.rainbow);
});
