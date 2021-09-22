/*
? Truthiness

- In JS, certain values represent Boolean equivalents
- The following values represent / coerce to false
    0
    NaN
    "" (the empty string)
    0n (the bigint version of zero)
    null
    undefined

  - 
*/

function printAllCarModels(models: number[] | null) {

    //* No Error
    // TypeScript understood that we did a "thruthiness" check here
    if (models && models !== null) {
        if (typeof models === "object") {
            models.forEach(model => {
                console.log(model)
            })
        }
    }
}