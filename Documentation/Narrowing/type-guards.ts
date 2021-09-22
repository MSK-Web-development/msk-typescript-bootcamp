/*
? Type guards

- In TypeScript, checking against the value returned by typeof is a type guard.
- In JS, typeof can return the below strings,
    "string"
    "number"
    "bigint"
    "boolean"
    "symbol"
    "undefined"
    "object"
    "function"
*/

function printCarDetails(model: number | string, make: string) {

    // //! Error - Operator '+' cannot be applied to types 'string | number' and 'number'.
    let nextModel = model + 1;
    console.log(`Next model is ${nextModel}`)

    // Let's fix this by adding a "type-guard". TS will understand it and not show error.
    let nextCarModel;
    if (typeof model === 'number') {
        nextCarModel = model + 1;
    } else {
        nextCarModel = +model + 1;
    }
    console.log(`Next model is ${nextCarModel}`)

}

printCarDetails(2007, "Honda");

/*
? Null check

- TypeScript can perform null checks inspite of enabling "type guards"
*/

function printAllCarModels(models: number[] | null) {
    //! Error - Object is possibly 'null'.
    models.forEach(model => {
        console.log(model)
    })

    if (typeof models === "object") {
        //! Error - Object is possibly 'null'.
        models.forEach(model => {
            console.log(model)
        })
    }

    //* No Error
    // TypeScript analysed that we performed a null check and parses the code without showing any error.
    if (models !== null) {
        if (typeof models === "object") {
            //* OK
            models.forEach(model => {
                console.log(model)
            })
        }
    }
}

