const {scan} = require('../utils/dynamoDB');

const fetchByName = async (req, res, next) => {
  const result = await scan('name', req.query.name);
  res.send(result.Items);
}

module.exports = {fetchByName};