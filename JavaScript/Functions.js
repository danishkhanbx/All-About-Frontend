// Normal: Defining it then calling it
function greet(){
    console.log('Hello');
}
greet();

/// Hoisting: Calling it then finding its Definition in the code
bye();
function bye(){
    console.log('Bye');
}

/// Anonymous function expression
var add = function(a, b)
{
    var res = a + b;
    return res
}
sum = add(5, 8)
console.log(sum)

/// Named Function Expression
var factorial = function fact(num)
{
    if(num <= 1)
    {
        return 1;
    }
    return num * fact(num-1);
}
var res = factorial(5);
console.log(res)

/// Self Invoking Function Expression
var result = ( function facto(nums)
{
    if(nums <= 1)
    {
        return 1;
    }
    return nums * facto(nums-1);
}) (5)
console.log(result)

// Arrow Function
let hello = (user) => 
{
    console.log('Hello '+user);
    return 1;
}
console.log(hello('Danish'));