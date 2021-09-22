/*
? Conditional Types "?"

NOTES:
- In JS we can use a "?" conditional to determine a value to be chosen. 
- They help describe the relation between the types of inputs and outputs.
- Used mostly in Generics
*/

interface Car {
    model: number;
    make: string;
    sedan: boolean;
};

interface Bike {
    speed: number;
}

interface Vehicle extends Car {
    cost: string
}

// Type of CarDetails is "number"
type CarDetails = Vehicle extends Car ? number : string;

//! Error - Type 'string' is not assignable to type 'number'.
const myCar: CarDetails = "BMW";

// Type of CarDetails is "string"
type BikeDetails = Vehicle extends Bike ? number : string;

//! Error - Type 'number' is not assignable to type 'string'.
const myBike: BikeDetails = 2011;


