var ISYServer = require('./isyserver.js').ISYServer;

// The config object is an optional parameter which can be used to set config parameters.
// All fields are optional. Below all are specified just for illustration purposes. 
var config = {
    loggerEnabled: true,
    elkEnabled: true,
    extendedErrors: true,
    userName: 'admin',
    password: 'password',
    requireAuth: true,
    configFile: './example-config.xml',
    nodeFile: './example-nodes.xml',
    statusFile: './example-status.xml',
    elkStatusFile: './example-elk-status.xml',
    elkTopologyFile: './example-elk-topology.xml',
    logResponseBody: false,
    logWebSockets: false ,
    logWebNotification: false,
    failVariableCalls: false
}

var server = new ISYServer(3000, config);
server.start();
