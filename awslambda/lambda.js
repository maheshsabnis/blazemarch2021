// configure the express app to be executed on AWS 
// based on HTTP handler
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server');
// create a hosting plan for the object model defined
// in server.js i.e. Express REST API
const server = awsServerlessExpress.createServer(app);
// make the application for publishing on event
// event: --> The trigger request received by the Lambda
// context --> The current execution context, load all required object
// in the chooses runtime for the Lamdba
// proxy ---> The Gateway aka listener to accept request to Lambda
module.exports.universal = (event, context) =>
    awsServerlessExpress.proxy(server, event, context);