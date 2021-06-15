const {createHmac} = require('crypto');
const secret = process.env.PASSWORD_SECRET;

module.exports.hashPassword = function(password) {
  return createHmac('sha256', secret)
    .update(password)
    .digest('hex');
}
