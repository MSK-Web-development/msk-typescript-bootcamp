/*
? Equality narrowing

- TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types.

*/

function printCarDetails(model: string | number, make: string | null) {
    //! Error - Property 'toUpperCase' does not exist on type 'string | number'.
    console.log(model.toUpperCase());

    //! Error - Object is possibly 'null'.
    console.log(make.toUpperCase());

    //* No Error
    // TypeScript did an equality check and declared that both must be strings.
    if (model == make) {
        console.log(model.toUpperCase());
        console.log(make.toUpperCase());
    }
}

// An example to check both null or undefined
function printNextCarModel(model: number | null | undefined) {
    //! Error - Object is possibly 'null' or 'undefined'.
    console.log(`Next model is ${model + 1}`)

    if (model !== null) {
        //! Error - Object is possibly 'undefined'.
        console.log(`Next model is ${model + 1}`)
    }

    if (model !== undefined) {
        //! Error - Object is possibly 'null'.
        console.log(`Next model is ${model + 1}`)
    }

    //* No Error
    // In JS, the != operator checks for both null and undefined values
    if (model != undefined) {
        //! Error - Object is possibly 'null'.
        console.log(`Next model is ${model + 1}`)
    }

    //* No Error
    // In JS, the != operator checks for both null and undefined values
    if (model != null) {
        //! Error - Object is possibly 'null'.
        console.log(`Next model is ${model + 1}`)
    }


}