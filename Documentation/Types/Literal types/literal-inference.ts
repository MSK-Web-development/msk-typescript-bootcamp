/*
? Literal Inference

NOTES:
- In an object type, TS will infer a general type for its properties. Not the literals
- You can force this with the "as" keyword for the properties.
*/

const car = {
    make: "Honda", // Inferred as string
    model: 2009 // Inferred as number
}

// No Error because car.model was inferred as "number". Not the literal 2009.
car.model = 2010;


//* Now let's explicitely make TS infer a literal
const car2 = {
    make: "Honda" as "Honda" | "Ford"
}

// OK
car2.make = "Ford";

//! Error - Type '"BMW"' is not assignable to type '"Honda" | "Ford"'.
car2.make = "BMW";

