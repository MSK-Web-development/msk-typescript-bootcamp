/*
 ? Function type expressions

 - TypeScript allows you to specify the types of both the input and output values of functions.
 - If a parameter type isn't specified, it is "any" implicitely. (just like other types)
 */


//* Example object type with function properties
type Car = {
    make: string,
    model: number | string,
    sedan: boolean,

    decelerate: () => void,
    accelerate: (speed: number) => void,
    getServiceCost: (serviceType: string) => number,
    isLatest: (model: number) => boolean
}

//* Example function type passed as callback
function printCar(callback: (make: string) => void) {
    callback("Ford");
}
printCar((make: string) => {
    console.log(make)
}) // Output - "Ford"

//! Wrong Example
//! This means the parameter name is "string". Not it's type.
function printCarErrorFunction(callback: (string) => void) {
    callback("Ford");
}


// Example using type aliases
type Accelerate = (speed: number) => void;
function accelerateMyCar(accelerateFn: Accelerate) {
    accelerateFn(100);
}

accelerateMyCar((speed) => {
    console.log(`Accelerating to ${speed} kmph`)
})




