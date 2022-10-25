const printLogged = (req, res, next) => {
    console.log('LOGGED');
    next();
}

const addRequestTime = (req, res, next) => {
    req.requestDate = (new Date()).toUTCString();
    next();
}

const errorHandling = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

module.exports = {
    printLogged,
    addRequestTime,
    errorHandling
};
