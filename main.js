var config = require('./common/config');
var launcher = require('./common/launcher');
var consts = require('./common/constants');
var config = require('./common/config');
var express = require('express');
var cors = require('cors');
var http = require('http');

// TODO: create bootstrap to clean this up
var app = express();
app.use(cors());

app.use(express.static(__dirname + '/client'));

app.get('/', ((req, res)=> {
    res.status(500).send('Okay boomer.');
}));

// Start
app.listen(config.entry.port, (()=>{
    console.log('Listening on port: ' + config.connections.entry.port);
}))