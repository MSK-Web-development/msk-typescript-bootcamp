/*
? Interfaces

- Interfaces are a way to name Object types
*/

// Object type alias
interface Car {
    make: string;
    model: string | number;
    sedan: boolean;
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

