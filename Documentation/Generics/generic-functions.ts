/*
? Generics

- Used when you want function output types to be related to input types
- The type was inferred / chosen automatically by TypeScript.
- You can avoid function overloading using generic functions.
*/

//* Using single Generic Type
function getLatestCarModel<Type>(allModels: Type[]): Type {
    return allModels[0];
}

// m1 is of type "number"
const m1 = getLatestCarModel([2021, 2020, 2019]);

// m1 is of type "string"
const m2 = getLatestCarModel(["2021", "2020", "2019"]);

