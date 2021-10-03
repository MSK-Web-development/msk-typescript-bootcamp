/*
? Array assertion inference

*/


// Array literals with const assertions will be inferred with "readonly" tuple types.
let carDetails = [2021, "BMW"] as const;


// To prove that carDetails is "readonly"
function printCarDetails([model, make]: [number, string]) {
    console.log(model);
    console.log(make);
}

//! Error - The type 'readonly [2021, "BMW"]' is 'readonly' and cannot be assigned to the mutable type '[number, string]'
// The function printCarDetails can't guarentee that it won't mutate the params. So TypeScript refuses to take it.
printCarDetails(carDetails)