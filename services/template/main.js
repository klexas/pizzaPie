var config = require('./config.json');
const express = require('express');
const app = express();

init = () => {
    app.listen(config.hub.port, (()=>{
        console.log(config.serviceName + 'Listening on port: ' + config.PORT);
    })) 
}

login = (req, res) => {
    // This is a POC
    const response = service.login();
    // We dont return a token or anything 
    // because the service shouldnt know about that
    return response;
    // Should get admin admin 
}

module.exports = {
    init: init
}
