var fs = require('fs');

routes = {
	'/': function(req, res) {
		fs.readFile('./home.html', function(err, data) {
			if (err) {
				throw err;
			}
			res.setHeader("Content-Type", "text/html");
			res.write(data);
			res.end();
		})
	},
	'/index.html': function(req, res) {
		fs.readFile('./index.html', function(err, data) {
			if (err) {
				throw err;
			}
			res.setHeader("Content-Type", "text/html");
			res.write(data);
			res.end();
		})
	},
	'/about.html': function(req, res) {
		fs.readFile('./about.html', function(err, data) {
			if (err) {
				throw err;
			}
			res.setHeader("Content-Type", "text/html");
			res.write(data);
			res.end();
		})
	},
	'/style.css': function(req, res) {
		fs.readFile('./style.css', function(err, data) {
			if (err) {
				throw err;
			}
			res.setHeader("Content-Type", "text/html");
			res.write(data);
			res.end();
		})
	}
}

module.exports = routes