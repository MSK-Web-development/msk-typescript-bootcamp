/*
 ? Annotating Functions parameters

 - TypeScript allows you to specify the types of both the input and output values of functions.
 */

 function printCarDetails(make: string, model: number, sedan: boolean) {
    console.log(`My car is designed by ${make.toUpperCase()}`);
    console.log(`My car is manufactured in ${model}`);
    if (sedan) {
        console.log(`Its a sedan`);
    } else {
        console.log(`Its a hatchback`);
    }

}

// No errors
printCarDetails("Hyundai", 2009, false)

// Typescript shows error if expected value types are not passed.
// !Error - Argument of type 'string' is not assignable to parameter of type 'number'.
printCarDetails("Hyundai", "2009", false)



/*
 ? Arg number check
 Even if you don’t have type annotations on your parameters, 
 TypeScript will still check that you passed the right number of arguments.
*/

// Consider this function where ny types are specified
function add2numbers(a, b) {
    console.log(a + b)
}

// !Error - Expected 2 arguments, but got 1
add2numbers(1)
