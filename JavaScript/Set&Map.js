let s1 = new Set('bookkeeper');
console.log(s1);

let num = new Set();
num.add(4);
num.add(4);
num.add(6);
num.add('6');
num.add('Danish');
num.add('Khan');
num.add('Khan');
console.log(num);

console.log(num.has('Danish'));

let map = new Map();
map.set('Dan', 'Web');  // key, value pairs
map.set('Jan', 'App');
map.set('Kan', 'AI');

console.log(map.keys());
console.log(map.has('Danish'));
console.log(map.get('Dan'));
for (let [k, v] of map)
    console.log(k, " : ", v);

map.set('Kan', 'ML');
map.forEach( (v, k) => console.log(k, ' : ', v) );
