/*
? Literal types

NOTES:
- You can create a very specific type that can take only allowed values.
- You can create a mix and match of Literal types & Non literal types.
*/

// Typescript described it as - bike: string
let bike = "Honda";
bike = "Hero"

// Typescript described it as - bike2: "Hero" (Literal)
const bike1 = "Hero";

// Another example
type Bike2 = "BMW" | "Honda" | 2021 | boolean;
let bike2: Bike2 = true;