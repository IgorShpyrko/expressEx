require('module-alias/register');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(function(Request, Response, next){
  Response.header("Access-Control-Allow-Origin", "*");
  Response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./routes/web'));

app.listen(3010, function() {
  console.log('App listen on 3010');
});

