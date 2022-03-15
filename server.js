var express = require("express")
var bodyParser = require('body-parser')
app = express()


// var dt = new Date();

// console.log( dt.toLocaleTimeString() + "[Server Activity] : Web server started")

// app.get('/', function(req, res){
//     res.send("Hello SIT737 World")
// })

// console.log( dt.toLocaleTimeString() + "[Server Activity] : Page has been requested")

app.use(bodyParser.urlencoded({
    extended: true
   }));
   app.use(bodyParser.json());
   app.use(express.static(__dirname + '/public'));

   const calculator= (n1,n2,op) =>{

    switch(op) {

        case '+': 
        return n1+n2;
        break;

        case '-':
        return n1-n2;
        break;

        case '/':
        return n1/n2;
        break;

        case '*':
        return n1*n2;
        break;

        default:
        console.log("Invalid operator");
        break;
    }
   }


   app.get("/calculator",function(request,response){
    var n1 = parseInt(request.query.n1);
    var n2 = parseInt(request.query.n2);
    var op = request.query.op;

    const result = calculator(n1,n2,op);

    console.log('The result for '+n1+' '+op+' '+n2+' = '+result)
    response.send('The result for '+n1+' '+op+' '+n2+' = '+result)
   })

   app.post('/calculator',function(request,response){
    var n1 = parseInt(request.query.n1);
    var n2 = parseInt(request.query.n2);
    var op = request.query.op;

    console.log("The operand is" +op);
    const result = calculator(n1,n2,op);

    console.log('The result for '+n1+' '+op+' '+n2+' = '+result)
    response.send('The result for '+n1+' '+op+' '+n2+' = '+result)
   })

app.listen(3000)
console.log("Listening on port 3000");