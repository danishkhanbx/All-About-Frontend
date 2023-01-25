let num = [3, 6, 4, 7, 77, 65, 42, 10];

console.log(num.filter(n => n%2===0));
console.log(num.filter(n => n%2===0).map(n => n*2));
let res = num.filter(n => n%2===0).map(n => n*2).reduce((a, b) => a +b);
console.log(res)