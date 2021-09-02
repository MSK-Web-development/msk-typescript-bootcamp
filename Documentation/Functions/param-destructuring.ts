/*
? Destructuring parameters
*/

//* The type annotation for the object goes after the destructuring syntax:
function printCarDetails({ make, model }: { make: string, model: number }) {
    console.log(`Car manufacturer is ${make}`);
    console.log(`Car model is ${model}`);

};

printCarDetails({
    make: "BMW",
    model: 2021,
});

//* Optimisation
// Let's convert this to a type alias for readability
type Car = { make: string, model: number }
function printCarDetailsV2({ make, model }: Car) {
    console.log(`Car manufacturer is ${make}`);
    console.log(`Car model is ${model}`);

};
