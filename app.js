var http = require('http'); 							 
var fs = require('fs'); 								 

var html = fs.readFileSync('text.txt');  				 

http.createServer(function (req, res) { 																		 
    res.writeHead(200, {'Content-Type': 'text/html'}); 	
    res.end(html); 	     			    
}).listen(8000); 										



/* 	http					- to use http server and client
	fs 						- file I/O
	fs.readFileSync			- returns contents of path, synchronous
	http.createServer		- returns a new instance of http server
	  function(req,res){}	- added to request event
	response.writeHead		- sends a response header to the request
	response.end()			- signals to the server that all of the response headers 
								and body have been sent
	res.end(html)			- data is specified, equivalent to calling response.write(data) 
								followed by response.end
*/