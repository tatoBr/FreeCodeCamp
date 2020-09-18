var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// --> 7)  Mount the Logger middleware here
const logMiddleware = ( req, res, next ) => {
  console.log(`${ req.method } ${ req.path } - ${ req.ip }`)
  next();
}

// --> 11)  Mount the body-parser middleware  here
app.use( bodyParser.urlencoded({ extended : false }));

/** 1) Meet the node console. */
console.log( "Hello World");

/** 2) A first working Express Server/
app.get( '/', ( req, res ) => {
  res.send( 'Hello Express' );
})

/** 3) Serve an HTML file /
app.get( '/', ( req, res ) => {
  res.sendFile( `${ __dirname }/views/index.html`)
})

/** 4) Serve static assets  */
let staticDirectoryMiddleware = express.static( `${ __dirname }/public` );
app.use( staticDirectoryMiddleware );

/** 5) serve JSON on a specific route / 
app.get('/json', ( req, res ) => {
  res.send({ "message" : "Hello json" });
})

/** 6) Use the .env file to configure the app /
app.get('/json', ( req, res ) => {

  let response = { "message" : "Hello json" };

  if( process.env.MESSAGE_STYLE === "uppercase")
  {
    let upperMessage = response.message.toUpperCase();
    response.message = upperMessage;
  }
  res.send( response );
})
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

app.get( '/json', logMiddleware, ( req, res )=>{
  let response = { "message" : "Hello Json"};
  if( process.env.MESSAGE_STYLE == "uppercase" )
  {
    let upperMessage = response.message.toUpperCase();
    response.message = upperMessage; 
  }
  res.json( response );
})

/** 8) Chaining middleware. A Time server */
const timeMiddleware = ( req, res, next ) => {
  let curTime = new Date().toString();
  req.time = curTime;
  next()
}
const handler = ( req, res ) =>{
  res.json( { "time" : req.time });
}
app.get( '/now', timeMiddleware, handler );

/** 9)  Get input from client - Route parameters */
app.get( '/:word/echo', ( req, res ) => {
  let word = req.params.word;
  res.json( { "echo" : word });
})

/** 10) Get input from client - Query parameters /
// /name?first=<firstname>&last=<lastname>
const queryhandler = ( req, res ) => {
			
	let { first : firstname, last : lastname } = req.query;
	let fullname = `${ firstname } ${ lastname }`
	res.json({ "name" : fullname });
}

app.get( '/name', queryhandler );
  
/** 11) Get ready for POST Requests - the `body-parser` /
// place it before all the routes !


/** 12) Get data form POST  */
app.post( '/name', ( req, res ) => {
	let { first : firstname, last : lastname } = req.body
	let fullname = `${ firstname } ${ lastname }`
	res.json({ "name" : fullname });
})


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
