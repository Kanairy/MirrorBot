var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("hellos");
  res.send();
});

app.get('/webhook', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.listen(process.env.PORT || 4730);
