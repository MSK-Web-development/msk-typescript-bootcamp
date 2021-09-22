/*
? The in operator narrowing

- instanceof is also a type guard
- JS will check the prototype chain if a field exists when we use "instanceof" operator.
*/

function printCarManufactureDate(model: Date | string) {
    //! Error - Property 'toUpperCase' does not exist on type 'string | Date'.
    console.log(model.toUpperCase());

    //* No Error
    // TypeScript has narrowed down using the instanceof operator.
    if (model instanceof String) {
        console.log(model.toUpperCase())
    }
}

printCarManufactureDate("2009")

