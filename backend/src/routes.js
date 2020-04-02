const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const storeController = require('./controllers/StoreController');
const searchController = require('./controllers/SearchController');
const profileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/store', storeController.getStore);
routes.post('/store', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        cnpj: Joi.string().required().length(14),
        cod_emp: Joi.string().required().length(8),
        serv_ip: Joi.string().required().min(8).max(15)
    }),
}), storeController.postStore);
routes.delete('/store/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}), storeController.deleteStore);
routes.put('/store/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}), storeController.editStore);

routes.get('/searchStore', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        cnpj: Joi.string().required().length(14)
    }).unknown(),
}), searchController.getStore);

routes.get('/profile', profileController.getProfile);
routes.post('/profile', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(4),
        username: Joi.string().required().min(4)
    }),
}), profileController.postProfile);
routes.delete('/profile/:username', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        username: Joi.string().required().min(4)
    }),
}), profileController.deleteProfile);
routes.put('/profile/:oldUsername', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        oldUsername: Joi.string().required().min(4)
    }),
}), profileController.editProfile);

module.exports = routes;
