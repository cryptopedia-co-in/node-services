var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.get('/getDate' , function(req,res){
	res.send('Todays Date :  '+ JSON.stringify(new Date()) )
})

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})