var http = require('http');
var fs = require('fs');
var routes = require('./routes')

var PORT = 8000;

function handleRequest(req, res) {
	if (routes[req.url]) {
		routes[req.url](req, res)
	} else {
		res.statusCode = 404;
		res.end("This doesn't exisstatu")
	});
}
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("I'm listening on port " + PORT)
});

// fs.readFile('./index.html', function(err, data) {
// 	if (err) {
// 		throw err;
// 	}

// 	res.setHeader("Content-Type", "text/html");
// 	res.statusCode = 200;
// 	res.write(data);
// 	res.end();