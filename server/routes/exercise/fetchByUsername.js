const {scan} = require('../../utils/dynamoDB');
const {EXERCISE_TABLE} = require('../../utils/constants');

const fetchByUsername = async (req, res, next) => {
  const result = await scan(EXERCISE_TABLE, 'name', req.query.name);
  res.send(result.Items);
}

module.exports = {fetchByUsername};
