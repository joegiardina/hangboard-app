const _ = require('lodash');
const {createHmac} = require('crypto');
const {hashPassword} = require('../../utils/hashPassword');
const {USERS_TABLE} = require('../../utils/constants');
const {get} = require('../../utils/dynamoDB');

const secret = process.env.PASSWORD_SECRET;

const login = async (req, res, next) => {
  const {username, password} = req.body;

  const resp = await get(USERS_TABLE, 'username', username);
  const foundUser = resp.Item;
  if (!foundUser) {
    return res.sendStatus(401);
  }

  const hashedPassword = hashPassword(password);

  if (foundUser && foundUser.password === hashedPassword) {
    const session = createHmac('sha256', secret)
      .update(JSON.stringify(foundUser))
      .digest('hex');
    res.cookie('session', session);
    res.send(_.omit(foundUser, 'password'));
  } else {
    res.sendStatus(401);
  }
}

module.exports = {login};