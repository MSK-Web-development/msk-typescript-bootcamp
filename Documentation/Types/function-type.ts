/*
?  The "Function" type

NOTES:
- The global type is denoted by Function in JavaScript 
- It describes properties like bind, call, apply, and other methods.
 */


function printCarDetails(callback: Function) {

    // This has implicit return type "any". Hence it is unsafe.
    callback(2021, "BMW")
}

printCarDetails((model: number, make: string) => {
    console.log("Car model is " + model);
    console.log("Car mcompany is " + make)
})