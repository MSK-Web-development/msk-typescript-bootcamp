/*
? Index signatures

- We can declare an object type which contans index numbers.
*/

interface CarNamesArray {
    [index: number]: string;
}

const carNames: CarNamesArray = { 0: "BMW", 1: "Ford" };

// type of fasterCar is "string"
const fasterCar = carNames["0"];


// Just a test to check the type returned
function testType(test: number) {
    console.log(test)
}
//! Error - Argument of type "string" is not assignable to "number"
testType(fasterCar);

//* Another way of declaring index signatures
interface CarNamesArrayV2 {
    [index: string]: number; // Still works because JS will convert indices when accessed.
}

/*
? Disadvantage of index signatures

- If you take string as index, Index signatures enforce that all other properties follow the same.
*/
interface CarNamesArrayV3 {
    [index: string]: number;
    model: number; // OK
    make: string; //!Error - Property 'make' of type 'string' is not assignable to string index type 'number'.
}

//* The Fix
interface CarNamesArrayV4 {
    [index: string]: number | string; // Union
    model: number;
    make: string;
}

