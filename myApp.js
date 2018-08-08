var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//app.use(express.static(__dirname + '/public'));
//app.use('/api/timestamp/:date_string', bodyParser.urlencoded({ extended: false }))
app.route('/api/timestamp/:date_string').get(function(req,res){
  var str = req.params.date_string;
  var reg = /^[0-9]*$/g;
  if (reg.test(str)){
    var date = new Date(parseInt(str));
  } else {
    var date = new Date(str);
  };
  if (date.toUTCString() == "Invalid Date"){
    res.json({"error" : "Invalid Date" });
  } else {
    res.json({"unix": date.getTime(), "utc" : date.toUTCString() });
  }
});



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
