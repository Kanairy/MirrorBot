curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<EAARCLXSRVw8BAEDrm4gPhKXjbaZAblCu1nKwGowElq87h6rSeJgjNmnlNazIXKPxaefo4W45MkHuGvUhZA1zMtHDv5wauWRWw4t0y8ygXdU1mcHZBMcA86AYm8vYC2UhRIjG1b1RfjC3ieE9dHrBfguKXYAXrCXA6es6FYjIAZDZD>"

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("hellos");
  res.send('Hello Page');
});

app.get('/webhook/', function (req, res) {
 if (req.query['hub.verify_token'] === '<mirror_bot_verify>') {
   res.send(req.query['hub.challenge']);
 }
 res.send('Error, wrong validation token');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.listen(process.env.PORT || 4730);
