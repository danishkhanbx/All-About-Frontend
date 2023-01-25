myJSON = `{
    "name": "Danish Khan",
    "age": 20,
    "married": false,
    "kids": null,
    "hobbies": ["Philosophy", "Quantum Computers"],
    "vehicle":{
        "name": "nested",
        "marks": 45,
        "shop": ["food", "clothes", {"type":"car"}]
    }
}`;
console.log(myJSON)
myJS = JSON.parse(myJSON);
console.log(myJS);

console.log(myJS['vehicle']);
console.log(myJS['vehicle']['shop']);
console.log(myJS['vehicle']['shop'][2]);
console.log(myJS['vehicle']['shop'][2]['type']);