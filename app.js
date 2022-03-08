var async = function(){
    setTimeout(function(){log("I am coming out later although I have been called before the next one")},2000)
}

var adder=function(number1,number2){
    var sum=number1+number2
    return sum
}

var log=function(msg){
    console.log("[Log] : ",msg)
}

log("The sum is:" +adder(5,6))
async()
log("This is going to come out before the previous one")