let n = '8';
console.log(n, typeof n)

let x = Number(n);
console.log(x, typeof x)

x = x + '';  // String + Number = String
console.log(x, typeof x)

x = x - 2;  // String - Number = Number
console.log(x, typeof x)

x = !x;  // x was true before !x(false) is assign to it 
console.log(x, typeof x)

console.log(Boolean(0))    // null, undefined = Falsy Value
console.log(Boolean(1))   // -inf, ..., -2, -1, 1, 2, ..., inf = Truthy Value