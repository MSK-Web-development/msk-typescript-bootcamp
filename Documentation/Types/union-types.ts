/*
? Union Types

NOTES:
- A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
- Use the pipe | operator to combine types.
*/

function printCarModel(model: number | string) {
    console.log("My car model is" + model);
}

// No Error
printCarModel("2009");

// No Error
printCarModel(2009);

/*
? Working with Union types.
- Make sure both the members support a certain operation when you use them.
*/

// Example 1: When members don't support common operations
function printCarModelV2(model: number | string) {

    //! Error - Property 'toUpperCase' does not exist on type 'string | number'.
    console.log("My car model is " + model.toUpperCase());

    //* Fix - You should narrow the Union with code
    if (typeof model === "string") {
        console.log("My car model is " + model.toUpperCase());
    } else {
        console.log("My car model is " + model);
    }
}

// No Error
printCarModelV2(2009);

// No Error
printCarModelV2("2009");


// Example 2: When members support common operations
function sliceTheInput(x: string[] | string) {

    //* No Error because both string and arrays have slice method
    return x.slice(0, 3)
}
