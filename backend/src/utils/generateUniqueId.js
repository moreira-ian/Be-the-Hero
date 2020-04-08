const crypto = require ('crypto');

module.exports = function genereteUniqueId(){
    return crypto.randomBytes(4).toString('Hex');
}