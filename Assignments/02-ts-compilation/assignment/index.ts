/**
 * This function prints all the car details to the console.
 * @param make - This is the company that manufactured the car.
 * @param model - The year of manufacture.
 * @param sedan - Indicated whether the car is a sedan or not.
 */
function printCarDetails(make: string, model: number, sedan: boolean): void {
    console.log(`My car is designed by ${make.toUpperCase()}`);
    console.log(`My car is manufactured in ${model}`);
    if (sedan) {
        console.log(`Its a sedan`);
    } else {
        console.log(`Its a hatchback`);
    }

}

printCarDetails("Hyundai", 2009, false)