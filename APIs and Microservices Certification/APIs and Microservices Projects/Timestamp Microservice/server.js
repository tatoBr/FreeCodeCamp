// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function(req, res) {
	res.json({ greeting: 'hello API' });
});

//define the api timestamp endpoint
app.get('/api/timestamp/:date_string?', (req, res) => {
	//retrieve date string from req parameters
	let dateStr = req.params.date_string;
	let date;
	let response;

	//Checks if the string isn't falsy
	if( !dateStr ) { 
		date = new Date();
		response = {
			"unix": date.getTime(),
			"utc" : date.toUTCString()
		}
		return res.json( response )
	}
	
	//checks if the string can be parsed as a valid unix value	
	if( /\d{5,}/.test( dateStr )){		
		date = new Date( parseInt( dateStr ));
		response = {
			"unix": date.getTime(),
			"utc" : date.toUTCString()
		}
		return res.json( response );
	}
	
	//create a new date Object
	date = new Date( dateStr );	 	

	//checks if it's a valida date
	if( date.toString() === "Invalid Date" ){
		response = { "error" : "Invalid Date" };
		return res.json( response );
	}

	response = {
			"unix": date.getTime(),
			"utc" : date.toUTCString()
		}		
	res.json( response )
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});
