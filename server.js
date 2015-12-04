var http = require('http');
var fs = require('fs');

var PORT = 8000;

function handleRequest(req, res) {
	if (req.url === '/index.html') {
		fs.readFile('./index.html', function(err, data) {
			if (err) {
				throw err;
			}

			res.setHeader("Content-Type", "text/html");
			res.statusCode = 200;
			res.write(req.url);
			res.end();
		});
	}
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("I'm listening on port " + PORT)
});