const http = require('http');
const express = require('express')
const port = 8000;
const app = express();



app.get("/home", function(req, res){
    res.end("<h1>Hello Nodejs Express</h1>")
})

app.get("/profile", function(req, res){
    res.end("<h1>Hello</h1>")
})

server.listen(port, function() {
    console.log("서버 실행 중 >>> http://localhost:"+port);
});