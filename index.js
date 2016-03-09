var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip(__dirname + "/app" , {
          maxAge: 0,
          clientMaxAge: 0
}));
app.listen(process.env.PORT || 5000);

var port = process.env.PORT ? process.env.PORT : 5000;
console.log("Server started listening on PORT: " + port);

