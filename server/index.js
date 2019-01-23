const messageQueue = require('./js/messageQueue.js');
require('./js/keypressHandler').initialize(messageQueue);
const handler = require('./js/httpHandler').initialize(messageQueue);

const http = require('http');
const server = http.createServer(handler);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
