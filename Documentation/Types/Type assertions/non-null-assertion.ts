/*
 ? Non-null Assertion Operator (Postfix ! )

 NOTES:
 - When you access null types, TS complains in strict mode.
 - To prevent it you can use ! operator.

 */

function printCarDetails(model: number | null) {
    //! Error when you compile with "--strict" flag - Object is possibly 'null'.
    console.log(`My car is ${model.toString()}`)

    //* OK
    console.log(`My car is ${model!.toString()}`)
}

printCarDetails(2021);

