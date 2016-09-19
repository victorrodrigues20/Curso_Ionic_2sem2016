"use strict";
class RacaBusiness{
    findAll(callbackRaca){
        callbackRaca(global.racas);
    }
}
module.exports = new RacaBusiness();