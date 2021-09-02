/*
? Function overloads

- In JS, you can overload functions that take different params.
- To do this is TS, you need to first declare all function overloads and then write the body.
*/

// Overload signature #1
function printCarDetails(model: number): void;

// Overload signature #2
function printCarDetails(model: number, make: string): void;


// The actual body
function printCarDetails(model: number, make?: string): void {
    if (make) {
        console.log("Model is " + model);
        console.log("Make is " + make);
    } else {
        console.log("Model is " + model);
    }
}

// Output - Model is 2021
const result1 = printCarDetails(2021);

// Output line 1 - Model is 2021
// Output line 2 - Make is BMW
const result2 = printCarDetails(2021, "BMW");


