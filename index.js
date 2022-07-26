const express = require('express');
const server = express();
server.use(express.json())
const routes = require('./Routes/routes');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
require('./db');
server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    /*res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.herader("Access-Control-Expose-Headers","Content-Range,X-Content-Range,XMLHttpRequest")*/
    res.header("Access-Control-Allow-Origin", "*")
res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
// res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    server.use(cors());
    next();
});

server.use(routes);




server.listen(PORT,()=>console.log('Servidor rodanto na porta: '+PORT))