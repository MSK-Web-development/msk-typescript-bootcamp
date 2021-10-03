/*
 ? The object type
 */

// Consider the following js function that takes obj as an arguement
function printCarDetailsInJS({ make, model }) {
    console.log(`My car was launched in ${model}`);
    console.log(`My car manufacturer is ${make}`);
}

printCarDetailsInJS({ make: "Hyundai", model: 2009 })

/*
? Annotated typescript code

NOTES:
- The params can be separated by either ; or ,
- The params can be marked optional with a ?
*/
function printCarDetailsInTS(carObj: { make?: string; model: number }): void {
    console.log(`My car was launched in ${carObj.model}`);

    //! Error - The "make" is optional but causes error if not passed
    console.log(`My car manufacturer is ${carObj.make.toUpperCase()}`);

    // A fix for missing "make" property
    console.log(`My car manufacturer is ${carObj.make?.toUpperCase()}`);
}

printCarDetailsInTS({ make: "Hyundai", model: 2009 })