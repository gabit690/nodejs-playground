const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    console.log('<<< ROUTER >>>');
    next();
});

router.get('/', (req, res) => {
    console.log("ROOT router matched");
    res.end();
});

router.get("/inner", (req, res) => {
    console.log("Inner router matched");
    res.end();
});

module.exports = router;
