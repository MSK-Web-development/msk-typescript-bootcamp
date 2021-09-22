/*
? Indexed Access Types

NOTES:
- You can access the type's properties using index.
- Indexing will in-turn return a "type"
*/

type Car = {
    model: number,
    make: string,
    sedan: boolean
}

// Company is a "string" alias
type Company = Car["make"]

// Details is a union "string | number"
type Details = Car["make" | "model"]

// AllDetails is a union of all properties of Car
type AllDetails = Car[keyof Car]

//! Error - Property 'cost' does not exist on type 'Car'. 
type Price = Car["cost"]

/* 
? Special case
 
NOTES:
- If you find some arbitraty type inside an array, you can extract the type
- We use "number" as the index to achieve this
*/
const myCars = [
    {
        make: "BMW",
        model: 2021
    }
]

// This type is an object => { make: string, model: number }
type MyCarArrayItemType = typeof myCars[number];

// This type is a "number"
type MyCarArrayItemModelType = typeof myCars[number]["model"];
