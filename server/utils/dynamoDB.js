const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1', credentials: {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
}});

let client;
function getClient() {
  if (!client) {
    client = new AWS.DynamoDB.DocumentClient();
  }
  return client;
}

function get(tableName, key, value) {
  const params = {
    TableName : tableName,
    Key: {
      [key]: value,
    },
  };
  return getClient().get(params).promise();
}

function put(tableName, data) {
  const params = {
    TableName: tableName,
    Item: data,
  };
  return getClient().put(params).promise();
}

function scan(tableName, key, value) {
  const params = {
    FilterExpression: `#${key} = :value`,
    ExpressionAttributeNames: {
      [`#${key}`]: key,
    },
    ExpressionAttributeValues: {
      ':value': value,
    },
    TableName: tableName,
  };
  return getClient().scan(params).promise();
}

module.exports = {get, put, scan};