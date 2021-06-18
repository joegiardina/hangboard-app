const uuid = require('uuid');
const {put} = require('../../utils/dynamoDB');
const {EXERCISE_TABLE} = require('../../utils/constants');

module.exports.save = async (req, res, next) => {
  const data = req.body;
  data.id = data.id || uuid.v4();
  data.created_at = new Date().toISOString();
  const result = await put(EXERCISE_TABLE, data);
  res.sendStatus(200);
}
