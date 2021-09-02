/*
? Implementation compatibility

- The implementation signature must also be compatible with the overload signatures.
*/

// Overload signature #1
function printCarDetails(model: number): void;

//! Error - This overload signature is not compatible with its implementation signature.
function printCarDetails(model: string): void;

function printCarDetails(model: number) {
    console.log(model)
}

