var express = require('express');
var moment  = require('moment');


var app = express();

app.use(express.static(__dirname + '/public'));


var printMessage  = function(message){
    console.log('[Server] @' + moment().format()+' '+message)
}


var adder  = function(num1,num2){
    return num1+num2;
}


app.get("/add",function(req,res){
    printMessage("Add request made");
    let num1  = req.query.num1;
    let num2  = req.query.num2;
    num1  = parseInt(num1);
    num2  = parseInt(num2);
    var sum  = adder(num1,num2);
    res.send("" + sum + "");
})




var port  = 3000;
app.listen(3000);
printMessage('Server is Listening on: '+port);