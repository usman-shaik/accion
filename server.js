var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/app', express.static('app'));
app.listen(1122,function(){
	console.log("App is running on 1122 port======== >");
})