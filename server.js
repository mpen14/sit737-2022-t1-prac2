var express = require('express')
var app = express()
var dt = new Date();

console.log( dt.toLocaleTimeString() + "[Server Activity] : Web server started")

app.get('/', function(req, res){
    res.send("Hello SIT737 World")
})

console.log( dt.toLocaleTimeString() + "[Server Activity] : Page has been requested")

app.listen(3000)