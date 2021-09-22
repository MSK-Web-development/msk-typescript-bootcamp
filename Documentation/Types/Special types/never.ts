/*
?  Special type | "never" 

NOTES:
- Some functions never return a value.
 */

// This function throws an exception. 
// Hence it never returns a value.
function crashCar(model: number): never {
    throw new Error("Car crashed");
}

// This function terminates the program. 
// Hence it never returns a value.
import { exit } from "process";
function terminate(process: number): never {
    exit(process)
}

// never also appears when nothing is left in a union.
function printCarDetails(make: string | number) {
    if (typeof make === "string") {
        console.log(make.toUpperCase())
    } else if (typeof make === "number") {
        console.log(make++)
    } else {
        //  Here the type of make is "never"
    }
}

