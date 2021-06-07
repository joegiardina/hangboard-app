const express = require('express');
const path = require('path');
const {setupRoutes} = require('./routes');

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '../build')));

setupRoutes(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
