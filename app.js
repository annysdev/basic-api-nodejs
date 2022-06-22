require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();
//los comentarios van en cursiva
