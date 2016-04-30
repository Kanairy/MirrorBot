
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("hellos");
  res.send('Hello Page');
});

app.get('/webhook/', function (req, res) {
 if (req.query['hub.verify_token'] === 'mirror_bot_verify') {
   res.send(req.query['hub.challenge']);
 }
 res.send('Error, wrong validation token');
})

app.get('/privatepolicy', function (req, res) {
  console.log("private policy");
  res.send('private policy');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.listen(process.env.PORT || 4730);
