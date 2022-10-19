const http = require('http');
const colors = require('colors');

const handleServer = (request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('<h1>Server READY</h1>');
    response.end();
}

const server = http.createServer(handleServer);

server.listen(3000, () => {
    console.log("Server on port 3000".green);
});