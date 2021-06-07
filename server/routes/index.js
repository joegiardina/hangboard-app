const express = require('express');
const path = require('path');
const {save} = require('./save');

module.exports.setupRoutes = app => {
  app.use(express.json());

  app.use('/health', (req, res) => {
    res.json({status: 'ok'});
  });

  app.post('/api/v1/save', save);
}