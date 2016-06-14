var express = require('express');
var app = express();

app.use(express.static('public'));

// Routes
app.get('/', function(req, res) {
  res.send('Hello world');
});

// Listen
var port = process.env.PORT;
app.listen(port);
console.log('Listening on localhost:'+ port);
