/*
?  The "Function" type

- The global type Function describes properties like bind, call, apply, and others present on all function values in JavaScript
- 
 */

function printCar(callback: Function) {

    // This has implicit return type "any". Hence it is unsafe.
    callback(2021, "BMW")
}