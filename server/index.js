const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

const {save} = require('./routes/save');

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.use('/health', (req, res) => {
  res.json({status: 'ok'});
});

app.post('/api/v1/save', save);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
