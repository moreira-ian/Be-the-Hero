/**Importacoes */
const express  = require('express');
const OngController = require ('./controllers/OngController');
const IncidentsController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();
//Sessions
routes.post('/sessions', SessionController.create);

//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Proflie
routes.get('/profile', ProfileController.index); 

//Incidents
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

/**Exportar rotas para index */
module.exports = routes;