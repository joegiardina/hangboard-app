const _ = require('lodash');
const {get, put} = require('../../utils/dynamoDB');
const {hashPassword} = require('../../utils/hashPassword');
const {USERS_TABLE} = require('../../utils/constants');

module.exports.create = async (req, res, next) => {
  const data = req.body;
  const resp = await get(USERS_TABLE, 'username', data.username);
  const foundUser = resp.Item;
  if (foundUser) {
    return res.sendStatus(500);
  }
  data.password = hashPassword(data.password);
  data.created_at = new Date().toISOString();
  const result = await put(USERS_TABLE, data);
  res.send(_.omit(data, 'password'));
}
