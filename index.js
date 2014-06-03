var express = require('express');
var compress = require('compression');
var app = express();
var server = app.listen(1234, "127.0.0.1", function() {
  console.log('Server listening on 127.0.0.1:1234', __dirname);
});

app.use(compress());
app.use("/", express.static(__dirname, { maxAge: 3 * 24 * 60 * 60 }));
