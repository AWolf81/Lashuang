// index.js

var express = require('express');
var app = express();
var path = require('path');

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static('client'));
app.use('/data', express.static(path.join(__dirname, 'data')));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
