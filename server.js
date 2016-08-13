/**
 * Created by emgsilva on 13-8-16.
 */

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({port: 3000});

// starts socker.io and makes use of the Hapi.server listener
var io = require('socket.io')(server.listener);

// register server
// - inert is used for HTML static page generation
server.register(require('inert'), function (err) {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            //reply('Hello World!');
            reply.file('index.html');
        }
    });

    server.start(function () {
        console.log('Server is running at: ' + server.info.port);
    });
});

var count = 0;

// handle new connections to socket.io and process events from client
io.on('connection', function (socket) {
    // when new connection is received, emit "count" event to client
    socket.emit('count', {count: count});
    // when an "increase" event is received from a client with an existing
    // socket connection
    socket.on('increase', function (data) {
        count++;
        console.log(count);
        io.sockets.emit('count', {count: count});
    });
});

