var http = require('http');
var fs = require('fs');
var routes = require('./routes')

var PORT = 8000;

function handleRequest(req, res) {
	if (routes[req.url]) {
		routes[req.url](req, res);
	} else {
		res.statusCode = 404;
		res.end("This doesn't exist");
	}
};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("I'm listening on port " + PORT)
});