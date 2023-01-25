/** Objects:
Booleans, Numbers, & String can be objects if defined with new keyword.
Dates, Maths, & Regular Expression are always objects. */

var str = new String(); // Object of String Data Type

var Car = {
    brand : 'Tesla',
    model : 'Model 3',
    'price in $' : 30000,

    // a function inside a object is called a Method
    teslaAutoPilot : function()
    {
        console.log('This car is Auto Pilot');
    }
}
Car.teslaAutoPilot();

// Attributes

Car.fuelType = 'Electric';  // Add new property and method
Car.newFunc = function()
{
    console.log('Added new Function/Method');
}
Car.newFunc();

delete Car.model;  // Delete property from object
console.log(Car.model);

Car['price in $'] = 45000;  // Update any property 
console.log(Car['price in $']);



