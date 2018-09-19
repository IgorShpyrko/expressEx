const express = require('express');
const Router = express.Router();
const HomeController = require('@controllers/HomeController');
const HomeMiddleware = require('./../app/Middlewares/Middleware');


Router.get('/', HomeMiddleware.home, HomeController.home);
Router.post('/', HomeController.post);

module.exports = Router;