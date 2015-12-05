var fs = require('fs');

routes = {
	'/index.html': function(req, res) {
		fs.readFile('.index.html', function(err, data) {
			if(err) {
				throw err;
			}
		res.setHeader("Content-Type", "text/html");
		res.write(data)
		res.end('index.html')
	})
	}
}

module.exports = routes