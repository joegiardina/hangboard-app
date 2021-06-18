const _ = require('lodash');
const express = require('express');
const cookieParser = require('cookie-parser')
const path = require('path');
const {save} = require('./exercise/save');
const {fetchByUsername} = require('./exercise/fetchByUsername');
const {login} = require('./user/login');
const {create} = require('./user/create');

const validateSession = (req, res, next) => {
  const sessionCookie = _.get(req, 'cookies.session');
  if (sessionCookie) {
    next();
  } else {
    res.status(401);
    res.send('Unauthorized');
  }
}

module.exports.setupRoutes = app => {
  app.use(cookieParser());
  app.use(express.json());

  app.use('/health', (req, res) => {
    res.json({status: 'ok'});
  });
  app.post('/api/v1/user/login', login);
  app.post('/api/v1/user/create', create);

  app.post('/api/v1/exercise/save', validateSession, save);
  app.get('/api/v1/exercise/fetchByUsername', validateSession, fetchByUsername);
}
