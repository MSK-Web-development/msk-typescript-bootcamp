/*
? Assignments

- TypeScript looks at the right side of the assignment and narrows the left side appropriately.
*/

// The type of y is string 
let x = "";

//! Error - Type 'number' is not assignable to type 'string'.
x = 123;

// The type of y is string | number
let y = true ? "Hello" : 123;

//* No Error
y = 456;



