/**Importacoes */
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//Sessions
routes.post('/sessions', SessionController.create);

//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

//Proflie
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({ authorization: Joi.string().required() }).unknown(),
}), ProfileController.index);

//Incidents
routes.post('/incidents', IncidentsController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);

/**Exportar rotas para index */
module.exports = routes;