const http = require('http');

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New Connection');
})

server.listen(3300);
console.log('Listening on port 3300...');

