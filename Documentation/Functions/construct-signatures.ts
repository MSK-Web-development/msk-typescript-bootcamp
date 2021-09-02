/*
? Construct signatures | The "new" operator

- JavaScript functions can also be invoked with the new operator.
- TypeScript refers to these as constructors because they usually create a new object.
*/

// Example in javascript
let carModels = new Array(10);

// Example constructor type
type CarFactory = {
    new(): {
        make: string,
        model: number | string
    }
};

function buildCar(factory: CarFactory) {
    return new factory();
}

// Example constructor type for those Objects which can be called with / without the "new" keyword
// String can be used without "new" keyword
type StringCallOrConstruct = {
    new(): String;
    (): String;
}

function generateCarName(carNameFactory: StringCallOrConstruct) {
    return new carNameFactory();
}

// Todo: How to use this function ?



