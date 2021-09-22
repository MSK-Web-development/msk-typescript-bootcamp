/*
? The "keyof" operator

- Returns the "numeric literal union" of the keys of an "object type".
- The "keyof" operator will return a "type" ( not a value )
*/

type Car = {
    make: number,
    model: number
}

// CarKeys is now a literal union of "make" and "model" strings
type CarKeys = keyof Car;

//* OK
const myKey1: CarKeys = "make";

//* OK
const myKey2: CarKeys = "model";

//! Error - Type "sedan" is not assignable to type 'keyof Car'.
const myKey1: CarKeys = "sedan";

/*
? Behaviour of keyof when used with index signature

- For an object with index signature, the keyof will return the type of the keys
*/

type CarModelsV1 = {
    [model: number]: string;
}

type CarModelsV2 = {
    [model: string]: number | boolean;
}

// Type of KeysV1 is "number"
type KeysV1 = keyof CarModelsV1;

//  Type of KeysV2 is "string | number"
type KeysV2 = keyof CarModelsV2;


// Example usage in Generics
function getCarFromModel<T extends CarModelsV1, K extends keyof T>(cars: T, model: K) {
    return cars[model];
}

getCarFromModel({
    2021: "BMW",
    2022: "Lamborghini"
}, 2021)
