# Node_HapiSocketioSimpleCount

Experiements with Node, Hapi Web framework and Socket.io

Simple experiment, which uses:

- NodeJS framework
- Hapi: Web framework for NodeJS (very interesting framework for building up Web Applications and RESTful APIs with Node. Alternative to Express, actually built on top of Express.
- Socket.io: JavaScript library that supports realtime bidirectional communication between client and server side. Especially interesting for server push notifications to clients.
- Inert: Node plugin that enables static content generation (e.g.: static HTML).

Project scope:

- server.js: implements server side, which upon receiving a GET http://localhost:3000/, serves an HTML page (index.html). It also starts a WebSocket connection with the client, and sent the client the "current count", which represents the nubmer of counts (clicks on client side) the server has received.
- index.html: implements the code for client side. It is a simple page, which shows the "count" received from server. Furthermore it has a button, which will use the WebSocket connection to send a "increase" event to the server-side, which will process it (count up) and respond with an increased count.
