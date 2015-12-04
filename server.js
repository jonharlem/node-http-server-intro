var http = require('http');
var fs   = require('fs');

var PORT = 8000;

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.write("<h1>I can change the response</h1>");
  res.end();
};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("I'm listening on port " + PORT)
});
