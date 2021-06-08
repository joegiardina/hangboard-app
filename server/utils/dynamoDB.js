const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1', credentials: {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
}});

const TableName = 'hangboard-app';

let client;
function getClient() {
  if (!client) {
    client = new AWS.DynamoDB.DocumentClient();
  }
  return client;
}


function put(data) {
  const params = {
    TableName,
    Item: data,
  };
  return getClient().put(params).promise();
}

function scan(key, value) {
  const params = {
    FilterExpression: `#${key} = :value`,
    ExpressionAttributeNames: {
      [`#${key}`]: key,
    },
    ExpressionAttributeValues: {
      ':value': value,
    },
    TableName
  };
  return getClient().scan(params).promise();
}

module.exports = {put, scan};