/*
? Type Aliases

- Aliases are names given to common types.
- Used for reusing common types.
*/

// Union type alias
type Model = string | number;

// Object type alias
type Car = {
    make: string,
    model: Model,
    sedan: boolean
}

function printCarDetails(carObj: Car) {
    console.log(`My car is ${carObj.make}`);
    console.log(`My car was launched in ${carObj.model}`);
}
printCarDetails({
    make: "Hyundai",
    model: 2009,
    sedan: false
})

