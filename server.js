var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello nodejs');
  response.end()
}).listen(8888);
// localhost:8888로 접속 가능