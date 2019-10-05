const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const MarketController = require('./controller/MarketController');
const UserController = require('./controller/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/market/register',upload.single('image'), MarketController.store);

routes.post('/user/register', UserController.store);

module.exports = routes;