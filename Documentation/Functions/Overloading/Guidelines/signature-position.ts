/*
? Signature position

GUIDELINE:
- The signature of the implementation is not visible from the outside.
- Overload signatures should be above the function body / implementation
*/

// The actual body placed above the overload declaration.
function printCarDetails(model: number, make?: string): void {
    if (make) {
        console.log("Model is " + model);
        console.log("Make is " + make);
    } else {
        console.log("Model is " + model);
    }
}

//! Error - Function implementation is missing or not immediately following the declaration.
function printCarDetails(model: number, make: string): void;




