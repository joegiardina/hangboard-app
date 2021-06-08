const uuid = require('uuid');
const {put} = require('../utils/dynamoDB');

module.exports.save = async (req, res, next) => {
  const data = req.body;
  data.id = uuid.v4();
  const result = await put(data);
  res.sendStatus(200);
}
