/*
 ? The object properties can be annotated  
 */

//  Consider the following js function that taked obj arguement
function printCarDetailsInJS({ make, model }) {
    console.log(`My car manufacturer is ${make}`);
    console.log(`My car was launched in ${model}`);
}

printCarDetailsInJS({ make: "Hyundai", model: 2009 })

/*
? Annotated typescript code

- The params can be separated by either ; or ,
- The params can be marked optional with a ?
*/
function printCarDetailsInTS(carObj: { make?: string; model: number }): void {
    console.log(`My car was launched in ${carObj.model}`);

    //! The "make" is optional but causes error if not passed
    console.log(`My car manufacturer is ${carObj.make.toUpperCase()}`);

    // A fix for missing "make" property
    console.log(`My car manufacturer is ${carObj.make?.toUpperCase()}`);
}

printCarDetailsInTS({ make: "Hyundai", model: 2009 })