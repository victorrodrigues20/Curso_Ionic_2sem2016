"use strict";

/**
 * Classe Security
 * @version 1.0
 */
class Security{

    /**
     * Retorna Configuração do CrossDomain
     * @returns {cross}
     */
    crossOrigin(){

        var cross = function (req,res,next){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
            res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
            res.send(200);
            return next();
        }

        return cross;

    }

    authorization(){

        var auth = function (req,res,next) {
        }

        return auth;
    }
}

module.exports = new Security();
