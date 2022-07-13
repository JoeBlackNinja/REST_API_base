require('dotenv').config();
require('colors');

const express = require('express');
const cors = require('cors');

const routes = require('../routes/user.routes');

class Server {
    constructor(){
        this.app = express(); 
        this.PORT = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Parseo del BODY y lectura
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usersPath, routes);
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server on PORT: ` +this.PORT.bgWhite.bold);
        });
    }

}

module.exports = Server;