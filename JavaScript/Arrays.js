// Creation 
let arr = new Array();
let values = [4, 6, 7];

console.log(values);
console.log(values.length +'\n');

// Methods
console.log(values.push(9), values);    // console length of the array, add at end
console.log(values.pop(), values);     // last element
console.log(values.shift(), values);  // pop's first element 
console.log(values.unshift(2), values);  // console length of the array, add at start
console.log(values.splice(1,2), values +'\n');  // slice(index val, num of val to remove, add values...), consoles removed, remaining array

// Destructuring
let num = [3, 6, 4, 7];

let [a, b, , d] = num;
console.log(d);

[a, b] = [b, a]  // swapping
console.log(a, b);

let words = 'My name is Danish Khan'.split(' ');
let [x, y, z, ...e] = words;
console.log(x, y, z, e +'\n');

// Loops
num = [];
num[0] = 5;
num[99] = 9;

for(let n of num){   // for of
    console.log(n);
}
for(key in num){    // for in
    console.log(num[key]+': '+key);
}
num.forEach((n, i, num) => {   // for each
    console.log(n, i, num);
});