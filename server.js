// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.get("/",(req,res)=>{
  res.redirect("https://four-scorpio.glitch.me/api/whoami");
});
// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/whoami", function(req, res){
  var ip = req.headers['x-forwarded-for'];
  ip = ip.split(",")[0];
  var os = req.headers['user-agent'].match(/\((.*)\)/)[1];
  var language = req.headers['accept-language'].split(",")[0];
  
  var parser ={
    ipadress:ip,
    language:language,
    software:os
  };
  res.json(parser);
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
