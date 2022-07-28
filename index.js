// Add this to the VERY top of the first file loaded in your app
const pino = require('pino')
var apm = require('elastic-apm-node').start({
    logger: pino({ level: 'info' }),
    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'Marvel-API-NodeJS',
    
    // Use if APM Server requires a secret token
    secretToken: '',
    opentelemetryBridgeEnabled: true,
    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',    
    // Set the service environment
    environment: 'staging'
})

const express = require('express')
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

apm.isStarted()
apm.getServiceName()

require('dotenv').config();

const port = process.env.PORT || 3333;
const mongo = process.env.MONGO;


mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)
app.get('/', function(req, res) {
    res.send('hello world');
});
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app