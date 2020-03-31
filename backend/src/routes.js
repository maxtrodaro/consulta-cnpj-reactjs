const express = require('express');

const storeController = require('./controllers/StoreController');
const searchController = require('./controllers/SearchController');
const profileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/store', storeController.getStore);
routes.post('/store', storeController.postStore);
routes.delete('/store/:id', storeController.deleteStore);
routes.put('/store/:id', storeController.editStore);

routes.get('/searchStore', searchController.getStore);

routes.get('/profile', profileController.getProfile);
routes.post('/profile', profileController.postProfile);
routes.delete('/profile/:username', profileController.deleteProfile);

module.exports = routes;
