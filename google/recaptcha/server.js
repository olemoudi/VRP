
var express = require('express'),
    app = express(),
    port = process.env.PORT || 80;

var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

app.listen(port);
// disable 304 responses
app.disable('etag');
// Serve Single-Page App static files
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'static')));

app.post('/rc', function(req, res) {


    console.log(req.body.token);

    request.post({url:'https://www.google.com/recaptcha/api/siteverify', form: {secret :'XXXX', response : req.body.token}}, function(err,httpResponse,body){ console.log(body); })
    

    var resbody;
    res.status(200).send(resbody);
});
