var server = require('http'); //http is a module

server.createServer(engine).listen(1337); // leefs

function engine(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain', 'blablabla': 'from code.com' });
    response.end('Hey there, from the server');
}