# Node_HapiSocketioSimpleCount

Experiements with Node, Hapi Web framework and Socket.io

**Libraries/Frameworks used in project:**

- NodeJS framework
- Hapi: Web framework for NodeJS (very interesting framework for building up Web Applications and RESTful APIs with Node. Alternative to Express, actually ot is built on top of Express.
- Socket.io: JavaScript library that supports realtime bidirectional communication between client and server side. Especially interesting for server push notifications to clients. It can run on top of WebSockets, but alternatively can fall back into other protocols, in case WebSockets are not available.
- Inert: Node plugin that enables static content generation (e.g.: static HTML).

**Project scope:**

- server.js: implements server side, which upon receiving a GET http://localhost:3000/, serves an HTML page (index.html). It also starts a WebSocket connection - if available - with the client, and sent the client the "current count", which represents the number of counts (clicks on client side) the server has received.
- index.html: implements the code for client side. It is a simple page, which shows the "count" received from server. Furthermore it has a button, which will use the previously established socket connection to send an "increase" event to the server-side, which will process it (count up) and respond with an increased count. The click and update of client side view is done without refreshing the browser - that is why such a bi-directional communication protocol is so interesting for realtime applications (e.g.: Chat, notifications, etc.).

**Set up project and run:**

- clone project
- npm install
- npm start (or node server.js)