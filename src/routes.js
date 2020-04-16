const express = require('express');
const EmailController = require('./controllers/EmailController');
const routes = express.Router();

routes.post('/sendEmail', EmailController.sendMail);

module.exports = routes;