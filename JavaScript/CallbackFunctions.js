// Callback Function 
// JavaScript is a synchronous and single-threaded language
// SetTimeout block the main thread and stack, thus Callback function uses Asynchronous method for execution 

setTimeout(function (){    // Asynchronous execution is happening instead of Synchronous
    console.log('timer'); // Synchronous execution: timer -> x
}, 3000);                // Asynchronous execution(executed): x -> timer
 
function x(y){
    console.log('x');
}

x(function y(){       // function y is the Callback Function
    console.log('y');
});