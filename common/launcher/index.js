const { exec } = require('child_process');

launch = (serviceName) => {
    var ref =  exec('node ./services/'+serviceName+'/main.js', function (error, stdout, stderr) {
        if (error) {
          console.log(error.stack);
          console.log('Error code: ' + error.code);
          console.log('Signal received: ' + error.signal);
        }
        console.log('Child Process STDOUT: ' + stdout);
        console.log('Child Process STDERR: ' + stderr);
      }
    );
    return ref;
    },

    loadRoutes = (app) => {
        app.get('/login', ((req, res)=> {   
            return "login";
        }));
    };

module.exports = {
    launch: launch,
    loadRoutes: loadRoutes
}
