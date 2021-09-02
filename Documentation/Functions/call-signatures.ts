/*
? Functions properties

- In JavaScript, functions can have properties also in addition to being "callable"  
- If we want to describe a function with callable with properties, we can write a call signature in an object type
*/

//* Example function type represented by an object.
type isLatestModel = {
    make: string,
    (currentYear: number, model: number): boolean
}

function isTheCarLatest(Fn: isLatestModel, currentYear: number, model: number) {
    console.log(`The car is ${Fn.make}`)
    if (Fn(currentYear, model)) {
        console.log("The car is latest model")
    } else {
        console.log("The car is an old model")
    }
}

function isLatestModelFn(currentYear: number, model: number): boolean {
    return model === currentYear;
}
isLatestModelFn.make = "BMW"

/**
 * Output
 * 
 * The car is BMW
 * The car is an old model
 */
isTheCarLatest(isLatestModelFn, 2021, 2009)





