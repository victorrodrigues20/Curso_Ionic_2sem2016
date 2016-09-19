"use strict";
class RacaResource {
    findAll(req, res, next) {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
        res.setHeader('Access-Control-Max-Age', '1000');

        this.racaBusiness = require("../business/racaBusiness");
        this.racaBusiness.findAll(function callbackRaca(rows){
            res.json(rows);
            next();
        });
    }
}
module.exports = new RacaResource();