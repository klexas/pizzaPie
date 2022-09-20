var config = require('./config.json');
const express = require('express');
const app = express();
let result = false;

app.get('/ttt', ((req, res)=> {
    res.status(200).send('loginService');
}));

app.listen(config.hub.port, (()=>{
    console.log('Listening on port: ' + config.hub.port);
    result  = true;
}
));

module.exports = {
    result: result
}