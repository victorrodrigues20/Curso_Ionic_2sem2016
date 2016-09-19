var restify = require('restify');
var server = restify.createServer();

var security = require('./security/security');


server.opts(/.*/,security.crossOrigin());

/**
 * Configuração de Middlewares
 * - CrossDomain
 * - Segurança
 * - Parser
 */
// CORS
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
/*
server.use(restify.CORS())
      .use(restify.fullResponse())
      .use(restify.queryParser())
      .use(restify.bodyParser())
      //.use(security.authorization());
*/

var racaResource = require('./resource/racaResource');

/**
 * GET - Resource Departamento
 */
server.get('/api/v1/raca', racaResource.findAll);

server.listen(3000, function listenOnPort() {
    console.log('Servidor executando em http://localhost:3000');
});

global.racas = [
    {
        id: 1,
        descricao: "Poodle"
    },
    {
        id: 2,
        descricao: "Boxer"
    },
    {
        id: 3,
        descricao: "Labrador"
    },
    {
        id: 4,
        descricao: "Vira Lata"
    }
];

//-------------------------------------------------------------------

