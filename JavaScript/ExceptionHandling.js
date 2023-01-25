// try, catch, finally

try
{
    console.log('Start of try runs ->');

    // unicycle;  // error producing variable

    console.log('End of try runs == never reached :)');

}catch(err)
{
    console.log('!!! Error has occurred: '+err.stack);
}

finally
{
    console.log('This will always run');
}

console.log('### End of executions and the execution continues ###');

// throw

let json = '{"age": 30}';
try
{
    let user = JSON.parse(json);
    if (!user.name){
        throw new SyntaxError('Incomplete json data: no name');
    }

    console.log(user.name);

}catch(e)
{
    console.log('JSON Error: '+ e.message);
}