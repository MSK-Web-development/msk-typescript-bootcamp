/*
? Example 1
? Creating your own literal type with Unions

NOTES:
- The type boolean itself is actually just an alias for the union true | false.
*/

// Let's create our own literal type that can take few strings.
let car: "Lamborghini" | "Honda" | "Ford" = "Honda";

// OK
car = "Ford";

//! Error - Type '"BMW"' is not assignable to type '"Lamborghini" | "Honda" | "Ford"'
car = "BMW";