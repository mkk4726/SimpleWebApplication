var http = require('http');

// 1 
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello nodejs');
//   response.end()
// }).listen(8888);
// localhost:8888로 접속 가능

// 2
// function onRequest (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello nodejs');
//   response.end()
// };

// http.createServer(onRequest).listen(8888)

// 3
var server = http.createServer();

// request event 처리
server.addListener('request', function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello nodejs');
  response.end()
});

// connection event 처리
server.addListener('connection', function(socket) {
  console.log('connected...');
});

server.listen(8888);