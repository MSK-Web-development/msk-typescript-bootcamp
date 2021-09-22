/*
? The "typeof" operator

- In JS you can already use typeof to get the type of an entity.
- Similarly, you can use this to get types in TypeScript.
*/

//  Example 1
type stringOrNumber = string | number;
const s: stringOrNumber = "Hello"
console.log(typeof s) // "string"

// Example 2
type Car = {
    make: string,
    model: number
}
const myCar: Car = {
    make: "BMW",
    model: 2021
}
console.log(typeof myCar) // "object"

