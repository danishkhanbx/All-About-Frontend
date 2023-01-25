// Function Statement aka Function Declaration
function a(){
    console.log('a called');
}
// Function Expression
var b = function (){
    console.log('b called');
}

// Anonymous function
// function (){

// }

// Named Function Expression
var b = function xyz(){
    console.log('b called');
}


// Parameters and Arguments
function ParaArg(para1, para2, para3){
    console.log('called by arguments');
}
ParaArg(arg1, arg2, arg3);


// First Class Functions: passing & returning a function as values to & from a function 
// Function are First Class Citizens
function c(para1){
    return function xyz(){

    } 
}
c(function(){

})