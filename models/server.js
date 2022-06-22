const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.usersEndPoint = '/api/users';

    // Middlewares
    this.middleware();
    // Rutas de mi aplicacion
    this.routes();
  }

  middleware() {
    // CORS
    this.app.use(cors());
    // Lectura y Parseo body
    this.app.use(express.json());
    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersEndPoint, require('../routes/user.routes'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`)
    })
  }

}

module.exports = Server;