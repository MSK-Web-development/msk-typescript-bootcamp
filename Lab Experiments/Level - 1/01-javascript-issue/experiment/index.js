/**
 * This function prints all the car details to the console.
 * @param make - This is the company that manufactured the car.
 * @param model - The year of manufacture.
 * @param sedan - Indicated whether the car is a sedan or not.
 */
function printCarDetails({ model, make, sedan }) {
    console.log("My Car model is " + model);
    
    let nextModel = model + 1;
    console.log("My Car's next model will be " + nextModel);
    console.log("My Car manufacturer is " + make.toUpperCase());

    if (sedan) {
        console.log("My Car is sedan");
    } else {
        console.log("My Car is not a sedan");
    }
}

printCarDetails({
    model: 2021,
    make: 'bmw',
    sedan: true
})

