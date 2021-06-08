const express = require('express');
const path = require('path');
const {save} = require('./save');
const {fetchByName} = require('./fetchByName');

module.exports.setupRoutes = app => {
  app.use(express.json());

  app.use('/health', (req, res) => {
    res.json({status: 'ok'});
  });

  app.post('/api/v1/save', save);
  app.get('/api/v1/fetchByName', fetchByName);
}
