var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var udpserver = dgram.createSocket('udp4');

udpserver.on('listening', function () {
    var address = udpserver.address();
    server.log('UDP Server listening on ' + address.address + ":" + address.port);
});

udpserver.on('message', function (message, remote) {
    server.log(remote.address + ':' + remote.port +' - ' + message);
    server.send(message);
});

udpserver.bind(PORT, HOST);
