var express = require("express")
var bodyParser = require('body-parser')
const log = require('log-to-file')
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

    var msg = 'Calculator has been started';
    logActivities(['Server Activity : ']+[msg]);
    log('Server Activity : '+msg , 'Manali_SIT737-2022-T1-PRAC2_log.log');

    var n1 = parseInt(request.query.n1);
    var n2 = parseInt(request.query.n2);
    var op = request.query.op;

    const result = calculator(n1,n2,op);

    msg = 'The result for '+n1+' '+op+' '+n2+' = '+result;

    logActivities(['Server Activity : ']+[msg]);
    log('Server Activity : '+msg , 'Manali_SIT737-2022-T1-PRAC2_log.log');

    console.log(msg)
    response.send(msg)
   })

   app.post('/calculator',function(request,response){

    var msg = 'Calculator has been started using post method';
    logActivities(['Server Activity : ']+[msg]);
    log('Server Activity : '+msg , 'Manali_SIT737-2022-T1-PRAC2_log.log');

    var n1 = parseInt(request.query.n1);
    var n2 = parseInt(request.query.n2);
    var op = request.query.op;

    console.log("The operand is" +op);
    const result = calculator(n1,n2,op);

    msg = 'The result for '+n1+' '+op+' '+n2+' = '+result;

    logActivities(['Server Activity : ']+[msg]);
    log('Server Activity : '+msg , 'Manali_SIT737-2022-T1-PRAC2_log.log');

    console.log(msg)
    response.send(msg)
    
   })
// add the function that logs activities
var logActivities = function () {
    return console.log.apply(
        console,
        [new Date().toTimeString().slice(0,8)].concat(
            Array.prototype.slice.call(arguments)
        )
    );
};

logActivities(['Server Activity']+[' :  Web server started']);
log('Server Activity : Web server started' , 'Manali_SIT737-2022-T1-PRAC2_log.log');

//start the app and listen to the port
app.listen(3000)
console.log("Listening on port 3000");
log('Listening on port : 3000' , 'Manali_SIT737-2022-T1-PRAC2_log.log');

console.timeEnd("web server started in ");
