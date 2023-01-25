// Creating Objects \\

// Creating object using Constructor
var obj = new Object();  

// Creating object using Object Create method
var objCreate = Object.create(null);   

// Function Constructor 
var obj = function(name)
{
    this.name = name;
}
var c = new obj('Leo');
console.log(c.name)

// Function Constructor + Prototype
function Car(brand, model, price)
{
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.teslaAutoPilot = function()
    {
        console.log('This car is Auto Pilot');
    }
}

var c1 = new Car('Tesla', 'Model 3', 600000);
var c2 = new Car('Tesla', 'Model P', 750000);

c1.teslaAutoPilot();
console.log(c2.model);

// Singleton Pattern
var objSingle = new function()
{
    this.name = 'Danish';
}
console.log(objSingle.name)

