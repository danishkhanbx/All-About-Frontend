<?php
$x = 0;

// if-else
if($x == 0){
    echo "x is neutral";
}
elseif($x > 0){
    echo "x is positive"
}
else{
    echo "x is negative";
}


// Switch Statements
switch($x){
    case 0: 
        echo "x is 0";
    break;
    case -1:
        echo "x is -1";
    break;
    default:
        echo "x is 1";
}

// Loops
for($x = 0; $x <= 10; $x++){
    echo $x"<br>";
}

while($x > 0){
    echo "x is positive <br>";
    $x--;
}

do{
    echo "x is in the range -inf to 1 <br>";
    $x++;
}while($x <= 0)

$array = array("Dan", "Jan", "Han");
foreach($array as $name){
    echo "My name is".$name.". <br>";
}

?>