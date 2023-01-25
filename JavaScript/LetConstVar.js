// Initialize & Declaration
var a;
let b;
const c = 3;  // initialize + declaration at the same time
a = 1;
b = 2;
// c = 4;  // TypeError: Assignment to constant variable.

// Duplicate Declarations
var a = 5; 
// let b = 6;      // Not allowed
// const c = 7;  // SyntaxError: Identifier 'c' has already been declared

console.log(a);
console.log(b);
console.log(c);


// ReferenceError: Cannot access 'e', 'f' before initialization
console.log(d);  // Temporal dead zone
var d = 8;
/* console.log(e);
console.log(f);
let e = 9;
const f = 10;  */

// Block Scope & Global Scope
var g = 11; 
let h = 12;      
const i = 13;
{
    var g = 14;  
    let h = 15;      
    const i = 16;  
    console.log(g);  
    console.log(h);  
    console.log(i);
}
console.log(g);   // var is global scope
console.log(h);  // let & const are block scope
console.log(i);

// Shadowing
var j = 17; 
{ var j = 18; }

// let l = 19; 
// { var l = 20; }

let k = 21; 
{ let k = 22; }

var m = 23; 
{ let m = 24; }

const n = 25; 
{ const n = 26; }