const config = require('./common/config');
const launcher = require('./common/launcher');
const consts = require('./common/constants');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Used for later with websoockets for real-time updates
const http = require('http');

// TODO: create factory
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

app.get('/', ((req, res)=> {
    res.status(200).send(consts.GREEATING);
}));

// Should be a put as its ptting a new one in
app.post('/launch', (async (req, res)=> {
    console.log('launching');
    // new service loaded
    // get the serviceName from the request
    const serviceName = req.body.serviceName;
    // TODO: Sanitize it
    await launcher.launch(serviceName);
   
    await launcher.loadRoutes(app);

    res.status(200).send(consts.GREEATING);
}));

// Start
app.listen(config.PORT, (()=>{
    console.log('Listening on port: ' + config.PORT);
}))