var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('C:/Users/smartron/Documents/Workspace/calculator' + '/static'));

app.get('/',function(request,response){
	response.sendFile(path.join('C:/Users/smartron/Documents/Workspace/calculator/static' + '/calci.html' ));
});
app.listen(8080);
console.log("server started");