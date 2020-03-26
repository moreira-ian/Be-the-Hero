const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
//Get - Listagem
async index(request,response){
   const ongs = await connection('ongs').select('*');
  return response.json(ongs); 
},
//Post
    async create (request, response){
         /**Pegar variaveis */
    const {name, email, whatsapp, city, uf}  = request.body;

    const id = crypto.randomBytes(4).toString('Hex'); 

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    
    return response.json({ id });
    }
}