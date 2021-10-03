/*
? The Problem with JavaScript

NOTES:
In JavaScript, at runtime, bugs / errors are caused either by wrong code / values written 
by developers or sometimes we may not know which values are being passed.
( ie., if the values are coming from a different source like the browser's DOM or the backend APIs )

TypeScript is the solution for all this!

*/

function onComputeClick(){
    let number1 = document.getElementById("num-1").value; 
    let number2 = document.getElementById("num-2").value;

    const result = number1 + number2;
    console.log(typeof number1)
}

