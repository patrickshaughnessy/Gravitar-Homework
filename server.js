'use strict'
var sentence = require('./sentence');
var maths = require('./maths.js');
var request = require('request');
var http = require('http');
var md5 = require('md5');

var server = http.createServer(function(req, res){

  var params = req.url.split('/');

  var operatorID = params[1];

  // console.log('params:', params);

  var response;

  switch (operatorID) {
    case 'gravatar':
      var emailAddress = params[2];
      var hash = md5(emailAddress);
      response = "http://www.gravatar.com/avatar/" + hash;
      break;
    case 'math':
      var mathVars = params.slice(3);
      // console.log(mathVars);
      response = maths.maths(params[2], mathVars);
      break;
    case 'sentence':
      response = sentence.sentence(params[2]);
      break;

  }

  res.write(response + '\n');
  res.end();

});

server.listen(3000);




// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//
//   }
// })
