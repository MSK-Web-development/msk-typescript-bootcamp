/*
? "void" gets ignored

- Function implementation body can still return even if return type in overload signature is void

*/

function getCarName(make: string): void;

// Alternate type declaration if you were wondering
// type getCarName = (make: string)=> void;

// The "void" type will be ignored in this case
function getCarName(make: string) {
    return `My car is ${make}`;
}

// carName is "void" type | Strange right ? But this behaviour exists!
const carName = getCarName("BMW")


//* Special case 
// In this example, you cannot return due to explicit type declaration in function implementation body.
function getCarNameV2(make: string): void {
    //! Error - Type 'string' is not assignable to type 'void'.
    return `My car is ${make}`;
}